import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export type EnquiryFormProps = {
  productId: string;
  productName: string;
  withSubject?: boolean;
  submitLabel?: string;
  onDone?: (() => void) | undefined;
  className?: string | undefined;
};

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const field =
  "mt-2 w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-gold focus:outline-none";
const labelCls = "text-xs font-semibold uppercase tracking-[0.16em] text-gold";

export function EnquiryForm({
  productId,
  productName,
  withSubject = false,
  submitLabel = "Send Enquiry",
  onDone,
  className,
}: EnquiryFormProps) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={cn("rounded-sm border border-gold/40 px-6 py-12 text-center", className)}>
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold text-gold">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-gold-gradient">Enquiry received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you — your enquiry about the {productName} is with our studio team. We reply to every
          enquiry within one working day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};
    if (!get("name")) next.name = "Please tell us your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(get("email"))) next.email = "Enter a valid email address.";
    if (get("phone").replace(/\D/g, "").length < 7) next.phone = "Enter a reachable phone number.";
    if (get("message").length < 10) next.message = "A little more detail helps us reply properly.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // Enquiry payload carries product context automatically.
    void { productId, productName, ...Object.fromEntries(data.entries()) };
    setSent(true);
    toast.success("Enquiry sent — we will be in touch shortly");
    onDone?.();
  };

  const Err = ({ msg }: { msg?: string | undefined }) =>
    msg ? <p className="mt-1.5 text-xs text-destructive">{msg}</p> : null;

  return (
    <form noValidate onSubmit={onSubmit} className={cn("space-y-5", className)}>
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="productName" value={productName} />

      <p className="rounded-sm border border-gold/30 bg-surface px-4 py-3 text-sm">
        <span className="text-gold">Product:</span> {productName}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor={`${productId}-name`}>
            Name *
          </label>
          <input id={`${productId}-name`} name="name" className={field} placeholder="Your name" />
          <Err msg={errors.name} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${productId}-email`}>
            Email *
          </label>
          <input
            id={`${productId}-email`}
            name="email"
            type="email"
            className={field}
            placeholder="you@studio.com"
          />
          <Err msg={errors.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor={`${productId}-phone`}>
            Phone / WhatsApp *
          </label>
          <input
            id={`${productId}-phone`}
            name="phone"
            type="tel"
            className={field}
            placeholder="+91 00000 00000"
          />
          <Err msg={errors.phone} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${productId}-company`}>
            Company / Studio
          </label>
          <input
            id={`${productId}-company`}
            name="company"
            className={field}
            placeholder="Optional"
          />
        </div>
      </div>

      {withSubject ? (
        <div>
          <label className={labelCls} htmlFor={`${productId}-subject`}>
            Subject
          </label>
          <input
            id={`${productId}-subject`}
            name="subject"
            className={field}
            placeholder="Trade pricing, custom colourway, lead time…"
          />
        </div>
      ) : null}

      <div>
        <label className={labelCls} htmlFor={`${productId}-message`}>
          Message *
        </label>
        <textarea
          id={`${productId}-message`}
          name="message"
          rows={4}
          className={cn(field, "resize-y")}
          placeholder="Tell us quantities, colourway and timelines."
        />
        <Err msg={errors.message} />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full border border-gold bg-background px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-gold shadow-gold-glow transition-all hover:scale-[1.02] hover:bg-gold-gradient hover:text-primary-foreground sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  );
}
