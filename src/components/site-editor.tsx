import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowDown,
  ArrowUp,
  Check,
  Copy,
  Eye,
  EyeOff,
  LogIn,
  Pencil,
  RotateCcw,
  Save,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";
import { cn } from "@/lib/utils";

export type EditorSection = {
  id: string;
  type: string;
  visible: boolean;
};

type SectionOverrides = {
  text?: Record<string, string>;
  images?: Record<string, { src: string; alt: string }>;
};

export type PageDocument = {
  sections: EditorSection[];
  overrides: Record<string, SectionOverrides>;
};

type EditorContextValue = {
  editing: boolean;
  document: PageDocument;
  updateOverrides: (id: string, overrides: SectionOverrides) => void;
  move: (id: string, direction: -1 | 1) => void;
  duplicate: (id: string) => void;
  remove: (id: string) => void;
  toggleVisible: (id: string) => void;
};

const EditorContext = createContext<EditorContextValue | null>(null);

function isPageDocument(value: unknown): value is PageDocument {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<PageDocument>;
  return Array.isArray(candidate.sections) && Boolean(candidate.overrides) && typeof candidate.overrides === "object";
}

export function SiteEditorProvider({
  slug,
  defaults,
  children,
}: {
  slug: string;
  defaults: PageDocument;
  children: (document: PageDocument) => ReactNode;
}) {
  const [document, setDocument] = useState(defaults);
  const [editing, setEditing] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isEditor, setIsEditor] = useState(false);
  const [busy, setBusy] = useState(false);
  const [canEditHost, setCanEditHost] = useState(false);
  const defaultsRef = useRef(defaults);

  useEffect(() => {
    const hostAllowsEditing =
      window.location.hostname === "localhost" || window.location.hostname.includes("-preview--");
    setCanEditHost(hostAllowsEditing);

    // Public production pages must never depend on the CMS/Supabase runtime.
    // The editor is only available on localhost and Lovable preview hosts.
    if (!hostAllowsEditing) return;

    let active = true;
    void supabase
      .from("published_pages")
      .select("content")
      .eq("slug", slug)
      .maybeSingle()
      .then(({ data }) => {
        if (active && isPageDocument(data?.content)) setDocument(data.content);
      })
      .catch(() => {
        // Keep the page's built-in defaults if the editor backend is unavailable.
      });
    void supabase.auth.getUser().then(({ data }) => {
      if (active) setUserId(data.user?.id ?? null);
    }).catch(() => {
      if (active) setUserId(null);
    });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) setUserId(session?.user.id ?? null);
    });
    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, [slug]);

  useEffect(() => {
    if (!userId) {
      setIsEditor(false);
      return;
    }
    let active = true;
    void supabase
      .from("user_roles")
      .select("id")
      .eq("user_id", userId)
      .eq("role", "editor")
      .maybeSingle()
      .then(({ data }) => {
        if (active) setIsEditor(Boolean(data));
      })
      .catch(() => {
        if (active) setIsEditor(false);
      });
    return () => {
      active = false;
    };
  }, [userId]);

  const beginEditing = async () => {
    if (!userId) {
      sessionStorage.setItem("steelx-editor-return", `${window.location.pathname}?edit=1`);
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) toast.error(result.error.message);
      return;
    }

    setBusy(true);
    let allowed = isEditor;
    if (!allowed) {
      const { error } = await supabase.from("user_roles").insert({ user_id: userId, role: "editor" });
      if (!error) allowed = true;
      if (error) toast.error("Editor access is already assigned to another account.");
    }
    if (allowed) {
      const { data } = await supabase
        .from("page_documents")
        .select("draft_content")
        .eq("slug", slug)
        .maybeSingle();
      if (isPageDocument(data?.draft_content)) setDocument(data.draft_content);
      setIsEditor(true);
      setEditing(true);
      setPanelOpen(true);
    }
    setBusy(false);
  };

  useEffect(() => {
    const returnTo = sessionStorage.getItem("steelx-editor-return");
    if (userId && returnTo) {
      sessionStorage.removeItem("steelx-editor-return");
      if (window.location.pathname !== returnTo.split("?")[0]) window.location.assign(returnTo);
      else void beginEditing();
    }
  }, [userId]);

  const updateOverrides = useCallback((id: string, overrides: SectionOverrides) => {
    setDocument((current) => ({
      ...current,
      overrides: { ...current.overrides, [id]: overrides },
    }));
  }, []);

  const move = useCallback((id: string, direction: -1 | 1) => {
    setDocument((current) => {
      const sections = [...current.sections];
      const from = sections.findIndex((section) => section.id === id);
      const to = from + direction;
      if (from < 0 || to < 0 || to >= sections.length) return current;
      const section = sections[from];
      if (!section) return current;
      sections.splice(from, 1);
      sections.splice(to, 0, section);
      return { ...current, sections };
    });
  }, []);

  const duplicate = useCallback((id: string) => {
    setDocument((current) => {
      const index = current.sections.findIndex((section) => section.id === id);
      const source = current.sections[index];
      if (!source) return current;
      const duplicateId = `${source.type}-${crypto.randomUUID()}`;
      const sections = [...current.sections];
      sections.splice(index + 1, 0, { ...source, id: duplicateId });
      return {
        sections,
        overrides: {
          ...current.overrides,
          [duplicateId]: structuredClone(current.overrides[id] ?? {}),
        },
      };
    });
  }, []);

  const remove = useCallback((id: string) => {
    setDocument((current) => ({
      sections: current.sections.filter((section) => section.id !== id),
      overrides: Object.fromEntries(Object.entries(current.overrides).filter(([key]) => key !== id)),
    }));
  }, []);

  const toggleVisible = useCallback((id: string) => {
    setDocument((current) => ({
      ...current,
      sections: current.sections.map((section) =>
        section.id === id ? { ...section, visible: !section.visible } : section,
      ),
    }));
  }, []);

  const save = async (publish: boolean) => {
    if (!userId || !isEditor) return;
    setBusy(true);
    const json = document as unknown as Json;
    const { data: existing } = await supabase
      .from("page_documents")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();
    const draftResult = existing
      ? await supabase
          .from("page_documents")
          .update({ draft_content: json, ...(publish ? { published_content: json } : {}), updated_by: userId })
          .eq("id", existing.id)
      : await supabase.from("page_documents").insert({
          slug,
          draft_content: json,
          published_content: publish ? json : ({} as Json),
          updated_by: userId,
        });
    const draftError = draftResult.error;
    let publishError = null;
    if (publish) {
      const result = await supabase.from("published_pages").upsert(
        { slug, content: json, published_at: new Date().toISOString() },
        { onConflict: "slug", ignoreDuplicates: false },
      );
      publishError = result.error;
    }
    if (draftError || publishError) toast.error("Your changes could not be saved.");
    else toast.success(publish ? "Page content published" : "Draft saved");
    setBusy(false);
  };

  const context = useMemo(
    () => ({ editing, document, updateOverrides, move, duplicate, remove, toggleVisible }),
    [document, duplicate, editing, move, remove, toggleVisible, updateOverrides],
  );

  return (
    <EditorContext.Provider value={context}>
      <div className={cn(editing && "site-editing")}>{children(document)}</div>
      {!editing && canEditHost ? (
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={() => void beginEditing()}
          disabled={busy}
          className="fixed bottom-5 left-5 z-[90] border-foreground/15 bg-background/80 backdrop-blur-md"
          aria-label={userId ? "Edit this page" : "Sign in to edit this page"}
          title={userId ? "Edit this page" : "Sign in to edit this page"}
        >
          {userId ? <Pencil /> : <LogIn />}
        </Button>
      ) : (
        <aside
          aria-label="Page editor"
          className={cn(
            "fixed inset-y-0 right-0 z-[100] w-[min(92vw,360px)] border-l border-foreground/10 bg-background/95 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-500",
            panelOpen ? "translate-x-0" : "translate-x-[calc(100%-52px)]",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">STEELX Studio</p>
              <h2 className="mt-1 text-lg font-medium">Page editor</h2>
            </div>
            <Button size="icon" variant="ghost" onClick={() => setPanelOpen((open) => !open)} aria-label="Toggle editor panel">
              {panelOpen ? <X /> : <Pencil />}
            </Button>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Select text to edit it. Select an image to replace its URL or description.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={() => void save(false)} disabled={busy}><Save /> Save draft</Button>
            <Button onClick={() => void save(true)} disabled={busy}><Check /> Publish content</Button>
          </div>
          <Button
            variant="ghost"
            className="mt-2 w-full"
            onClick={() => setDocument(defaultsRef.current)}
            disabled={busy}
          >
            <RotateCcw /> Restore defaults
          </Button>
          <div className="mt-8 border-t border-foreground/10 pt-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sections</p>
            <ol className="mt-3 max-h-[calc(100vh-320px)] space-y-1 overflow-y-auto pr-1">
              {document.sections.map((section, index) => (
                <li key={section.id} className="flex items-center gap-1 border-b border-foreground/5 py-2">
                  <span className="min-w-0 flex-1 truncate text-xs">{index + 1}. {section.type.replaceAll("-", " ")}</span>
                  <EditorIcon label="Move up" onClick={() => move(section.id, -1)}><ArrowUp /></EditorIcon>
                  <EditorIcon label="Move down" onClick={() => move(section.id, 1)}><ArrowDown /></EditorIcon>
                  <EditorIcon label={section.visible ? "Hide section" : "Show section"} onClick={() => toggleVisible(section.id)}>
                    {section.visible ? <Eye /> : <EyeOff />}
                  </EditorIcon>
                  <EditorIcon label="Duplicate section" onClick={() => duplicate(section.id)}><Copy /></EditorIcon>
                  <EditorIcon label="Delete section" onClick={() => remove(section.id)}><Trash2 /></EditorIcon>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      )}
    </EditorContext.Provider>
  );
}

function EditorIcon({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <Button type="button" size="icon" variant="ghost" className="h-7 w-7" onClick={onClick} aria-label={label} title={label}>
      {children}
    </Button>
  );
}

export function EditableSection({ id, children }: { id: string; children: ReactNode }) {
  const editor = useContext(EditorContext);
  const ref = useRef<HTMLDivElement>(null);
  const overrides = editor?.document.overrides[id] ?? {};

  useEffect(() => {
    const root = ref.current;
    if (!root || !editor) return;
    const candidates = Array.from(root.querySelectorAll<HTMLElement>("h1,h2,h3,h4,p,figcaption,th,td,legend"));
    const textNodes = candidates.flatMap((element) => {
      const directTextChildren = Array.from(element.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement && child.tagName === "SPAN" && child.children.length === 0,
      );
      return directTextChildren.length ? directTextChildren : element.children.length === 0 ? [element] : [];
    });
    const images = Array.from(root.querySelectorAll<HTMLImageElement>("img"));
    textNodes.forEach((element, index) => {
      element.dataset["editorText"] = String(index);
      const replacement = overrides.text?.[String(index)];
      if (replacement !== undefined && element.textContent !== replacement) element.textContent = replacement;
      element.contentEditable = editor.editing ? "true" : "false";
      element.spellcheck = editor.editing;
    });
    images.forEach((image, index) => {
      image.dataset["editorImage"] = String(index);
      const replacement = overrides.images?.[String(index)];
      if (replacement) {
        image.src = replacement.src;
        image.alt = replacement.alt;
      }
      image.tabIndex = editor.editing ? 0 : -1;
    });
  }, [editor, overrides]);

  const captureText = (target: HTMLElement) => {
    const key = target.dataset["editorText"];
    if (!editor || key === undefined) return;
    editor.updateOverrides(id, {
      ...overrides,
      text: { ...overrides.text, [key]: target.textContent ?? "" },
    });
  };

  const editImage = (image: HTMLImageElement) => {
    const key = image.dataset["editorImage"];
    if (!editor || !editor.editing || key === undefined) return;
    const src = window.prompt("Image URL", image.currentSrc || image.src);
    if (!src) return;
    const alt = window.prompt("Image description", image.alt) ?? image.alt;
    editor.updateOverrides(id, {
      ...overrides,
      images: { ...overrides.images, [key]: { src, alt } },
    });
  };

  return (
    <div
      ref={ref}
      data-editor-section={id}
      className={cn("contents", editor?.editing && "editable-section")}
      onBlur={(event) => {
        if (event.target instanceof HTMLElement && event.target.dataset["editorText"] !== undefined) captureText(event.target);
      }}
      onClick={(event) => {
        if (event.target instanceof HTMLImageElement) editImage(event.target);
      }}
      onKeyDown={(event) => {
        if (event.target instanceof HTMLImageElement && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          editImage(event.target);
        }
      }}
    >
      {children}
    </div>
  );
}
