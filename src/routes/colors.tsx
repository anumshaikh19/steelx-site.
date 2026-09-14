import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PvdSurfacesPage } from "@/components/pvd-surfaces-page";

export const Route = createFileRoute("/colors")({
  head: () => ({ meta: [
    { title: "PVD Surfaces — STEEL × DECOR" },
    { name: "description", content: "PVD coated stainless steel surfaces engineered for architecture, interiors, facades, hospitality, retail and bespoke metalwork." },
  ] }),
  component: ColorsPage,
});

function ColorsPage() {
  return <><SiteHeader overlay /><PvdSurfacesPage /><SiteFooter /></>;
}
