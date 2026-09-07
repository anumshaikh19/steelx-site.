import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { product } from "@/data/product";

const title = (slug: string) =>
  slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export const Route = createFileRoute("/tag/$slug")({
  head: ({ params }) => {
    const name = title(params.slug);
    return {
      meta: [
        { title: `${name} | SteelX Decor` },
        {
          name: "description",
          content: `Handcrafted SteelX Decor pieces tagged ${name.toLowerCase()} — linen, brass and PVD finishes made to order.`,
        },
        { property: "og:title", content: `${name} | SteelX Decor` },
        {
          property: "og:description",
          content: `SteelX Decor pieces tagged ${name.toLowerCase()}.`,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TagPage,
});

function TagPage() {
  const { slug } = Route.useParams();
  const name = title(slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1500px] px-4 py-20 sm:px-8 lg:px-10 lg:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Tag</p>
        <h1 className="mt-4 font-display text-4xl text-gold-gradient sm:text-5xl">{name}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Everything we make carrying this tag is handcrafted to order. Here is the piece our clients
          specify most.
        </p>
        <Link to="/" className="mt-12 grid gap-6 sm:max-w-md sm:grid-cols-[10rem_1fr] sm:items-center">
          <img
            src={product.gallery[0]!.src}
            alt={product.gallery[0]!.alt}
            width={512}
            height={512}
            className="aspect-square w-full rounded-sm bg-white object-contain"
          />
          <span>
            <span className="block font-display text-2xl">{product.name}</span>
            <span className="mt-2 block text-sm text-muted-foreground">{product.tagline}</span>
            <span className="mt-3 block text-xs uppercase tracking-[0.18em] text-gold">
              View product
            </span>
          </span>
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
