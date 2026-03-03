import Link from 'next/link';
import {
  ArrowRight,
  Package,
  Terminal,
} from 'lucide-react';
import { components, categories as allCategories } from '@/lib/registry';
import { ComponentThumbnail } from '@/components/component-thumbnails';

const categoryList = [
  { name: 'All', slug: 'all' },
  ...allCategories.map((cat) => {
    const meta = components.find((c) => c.category === cat);
    return { name: cat, slug: meta?.categorySlug ?? '' };
  }),
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-fd-background">
      {/* Compact hero */}
      <section className="border-b border-fd-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground">
                <Package size={12} />
                <span>v0.1.1</span>
                <span className="mx-1 text-fd-border">|</span>
                <span>{components.length} components</span>
                <span className="mx-1 text-fd-border">|</span>
                <span>74 tokens</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl">
                Malix Design System
              </h1>
              <p className="mt-3 text-lg text-fd-muted-foreground">
                Camtom's design system for enterprise foreign trade software.
                49 React components, 74 design tokens, zero visual chaos.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-foreground px-5 py-2.5 text-sm font-medium text-fd-background transition-opacity hover:opacity-90"
              >
                Get Started
                <ArrowRight size={14} />
              </Link>
              <div className="flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2.5 font-mono text-sm text-fd-muted-foreground">
                <Terminal size={14} className="shrink-0 text-fd-muted-foreground" />
                <span className="truncate">pnpm add @malix/ui @malix/tokens</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="sticky top-0 z-10 border-b border-fd-border bg-fd-background/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="-mb-px flex gap-0 overflow-x-auto scrollbar-none">
            {categoryList.map((cat) => (
              <a
                key={cat.slug}
                href={cat.slug === 'all' ? '#all' : `#${cat.slug}`}
                className="shrink-0 border-b-2 border-transparent px-4 py-3 text-sm text-fd-muted-foreground transition-colors hover:border-fd-foreground/20 hover:text-fd-foreground data-[active]:border-fd-foreground data-[active]:text-fd-foreground"
              >
                {cat.name}
                {cat.slug === 'all' && (
                  <span className="ml-1.5 text-xs text-fd-muted-foreground">
                    {components.length}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Component grid by category */}
      <section className="mx-auto max-w-7xl px-6 py-12" id="all">
        {allCategories.map((category) => {
          const catComponents = components.filter(
            (c) => c.category === category
          );
          const slug = catComponents[0]?.categorySlug ?? '';

          return (
            <div key={category} id={slug} className="mb-16 last:mb-0 scroll-mt-20">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-fd-foreground">
                    {category}
                  </h2>
                  <span className="rounded-md bg-fd-muted px-2 py-0.5 text-xs font-medium tabular-nums text-fd-muted-foreground">
                    {catComponents.length}
                  </span>
                </div>
                <Link
                  href={`/docs/components/${slug}`}
                  className="text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
                >
                  View all
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {catComponents.map((comp) => (
                  <Link
                    key={comp.slug}
                    href={`/docs/components/${comp.categorySlug}/${comp.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-fd-border bg-fd-card transition-all hover:border-fd-foreground/20 hover:shadow-md"
                  >
                    {/* Visual preview area */}
                    <div className="flex h-36 items-center justify-center border-b border-fd-border bg-fd-muted/30 p-4 transition-colors group-hover:bg-fd-muted/50">
                      <ComponentThumbnail slug={comp.slug} />
                    </div>
                    {/* Label */}
                    <div className="px-4 py-3">
                      <h3 className="text-sm font-medium text-fd-foreground">
                        {comp.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-fd-muted-foreground line-clamp-1">
                        {comp.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-fd-border">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-fd-foreground">
                Malix
              </span>
              <span className="text-xs text-fd-muted-foreground">
                Built by{' '}
                <a
                  href="https://camtomx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fd-muted-foreground underline decoration-fd-border underline-offset-2 transition-colors hover:text-fd-foreground"
                >
                  Camtom
                </a>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/docs"
                className="text-xs text-fd-muted-foreground transition-colors hover:text-fd-foreground"
              >
                Docs
              </Link>
              <Link
                href="/docs/components"
                className="text-xs text-fd-muted-foreground transition-colors hover:text-fd-foreground"
              >
                Components
              </Link>
              <a
                href="https://github.com/carloscamtom/malix-design-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-fd-muted-foreground transition-colors hover:text-fd-foreground"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
