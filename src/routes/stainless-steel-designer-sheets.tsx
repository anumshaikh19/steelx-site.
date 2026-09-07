import { createFileRoute } from "@tanstack/react-router";

import {
  DsBeadBlast,
  DsCollectionOpening,
  DsEmbossed,
  DsEtched,
  DsHairline,
  DsHero,
  DsIntro,
  DsMaterialIndex,
  DsMirror,
  DsPvd,
  DsStamped,
  DsWaterRipple,
} from "@/components/designer-sheets/sections-a";
import {
  DsApplications,
  DsComparison,
  DsConfigurator,
  DsCustom,
  DsFabrication,
  DsFinalStatement,
  DsFooter,
  DsMobileBar,
  DsProjects,
  DsSampleRequest,
  DsSampleTable,
  DsSpecification,
} from "@/components/designer-sheets/sections-b";

const title = "Stainless Steel Designer Sheets | STEELX";
const description =
  "Explore STEELX stainless steel designer sheets in Mirror, Hairline, Stamped, Etched, Embossed, Bead Blast, Water Ripple and PVD finishes for architectural and interior applications.";

export const Route = createFileRoute("/stainless-steel-designer-sheets")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@200;300;400;500&display=swap",
      },
    ],
  }),
  component: DesignerSheetsPage,
});

function DesignerSheetsPage() {
  return (
    <div className="ds-theme min-h-screen pb-14 lg:pb-0">
      <DsMaterialIndex />
      <main>
        <DsHero />
        <DsIntro />
        <DsCollectionOpening />
        <DsMirror />
        <DsStamped />
        <DsHairline />
        <DsEtched />
        <DsEmbossed />
        <DsBeadBlast />
        <DsWaterRipple />
        <DsPvd />
        <DsConfigurator />
        <DsComparison />
        <DsSampleTable />
        <DsApplications />
        <DsProjects />
        <DsSpecification />
        <DsFabrication />
        <DsCustom />
        <DsSampleRequest />
        <DsFinalStatement />
      </main>
      <DsFooter />
      <DsMobileBar />
    </div>
  );
}
