import { createFileRoute, notFound } from "@tanstack/react-router";

import { ProductPageView } from "@/components/product-page";
import { product } from "@/data/product";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const products = { [product.id]: product } as const;

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const found = products[params.slug as keyof typeof products];
    if (!found) throw notFound();
    return { name: found.name, tagline: found.tagline, slug: params.slug };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name} | SteelX Decor`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.tagline },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductRoute,
});

function ProductRoute() {
  const { slug } = Route.useParams();
  const found = products[slug as keyof typeof products];
  if (!found) return <ProductNotFound />;
  return <ProductPageView product={found} />;
}

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-[1500px] px-4 py-32 text-center sm:px-8">
        <h1 className="font-display text-4xl text-gold-gradient">Product not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The product you are looking for is not available.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
