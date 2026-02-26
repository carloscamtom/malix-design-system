import Link from 'next/link';
import {
  Component,
  Palette,
  Code2,
  Layers,
  Zap,
  Shield,
  ArrowRight,
  Package,
  Paintbrush,
  Terminal,
} from 'lucide-react';

const stats = [
  { label: 'Components', value: '49', icon: Component },
  { label: 'Design Tokens', value: '74', icon: Paintbrush },
  { label: 'Categories', value: '10', icon: Layers },
  { label: 'TypeScript', value: '100%', icon: Code2 },
];

const features = [
  {
    icon: Palette,
    title: 'Token-Driven Design',
    description:
      'All visual properties come from a closed set of 74 CSS custom properties. No magic numbers, no arbitrary values.',
  },
  {
    icon: Zap,
    title: 'Zero Dependencies',
    description:
      'Components have no external runtime dependencies beyond React. Lightweight and predictable.',
  },
  {
    icon: Code2,
    title: 'TypeScript First',
    description:
      'Full type safety with exported interfaces for every component. Autocomplete and compile-time checks included.',
  },
  {
    icon: Shield,
    title: 'Accessible',
    description:
      'Keyboard navigation, focus management, ARIA attributes, and screen reader support built into every component.',
  },
  {
    icon: Layers,
    title: 'Data-Attribute Variants',
    description:
      'Variants controlled via data-* attributes, not CSS modifier classes. Clean API, predictable styles.',
  },
  {
    icon: Package,
    title: 'No Surprise Policy',
    description:
      'New tokens and components require proposal and approval. The system grows intentionally, not accidentally.',
  },
];

const categories = [
  { name: 'Form Inputs', count: 11, slug: 'form-inputs' },
  { name: 'Navigation', count: 7, slug: 'navigation' },
  { name: 'Feedback', count: 9, slug: 'feedback' },
  { name: 'Data Display', count: 6, slug: 'data-display' },
  { name: 'Overlays', count: 4, slug: 'overlays' },
  { name: 'Interactive', count: 4, slug: 'interactive' },
  { name: 'Layout', count: 4, slug: 'layout' },
  { name: 'Specialized', count: 3, slug: 'specialized' },
  { name: 'Buttons', count: 1, slug: 'buttons' },
  { name: 'Composite', count: 1, slug: 'composite' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-fd-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-muted-foreground shadow-sm">
              <Package size={14} />
              <span>v0.1.1 — 49 components ready</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-fd-foreground sm:text-6xl lg:text-7xl">
              Build interfaces{' '}
              <span className="bg-gradient-to-r from-fd-foreground to-fd-muted-foreground bg-clip-text text-transparent">
                with precision
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fd-muted-foreground">
              A professional design system with 49 production-ready React
              components. Built with CSS custom properties, TypeScript, and a
              strict token-driven architecture.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-fd-foreground px-6 py-3 text-sm font-medium text-fd-background transition-opacity hover:opacity-90"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/docs/components"
                className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-6 py-3 text-sm font-medium text-fd-foreground shadow-sm transition-colors hover:bg-fd-muted"
              >
                <Component size={16} />
                Browse Components
              </Link>
            </div>

            {/* Inline install command */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="flex items-center gap-3 rounded-lg border border-fd-border bg-fd-card px-4 py-2.5 font-mono text-sm text-fd-muted-foreground shadow-sm">
                <Terminal size={14} className="shrink-0" />
                <span className="truncate">pnpm add @malix/ui @malix/tokens</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-fd-border">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 divide-x divide-fd-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 px-6 py-10 text-center"
              >
                <stat.icon
                  size={18}
                  className="mb-1 text-fd-muted-foreground"
                />
                <span className="text-3xl font-bold tracking-tight text-fd-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-fd-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-fd-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-fd-foreground">
              Built for scale
            </h2>
            <p className="mt-4 text-fd-muted-foreground">
              Every decision in Malix is intentional — from the token validation
              pipeline to the accessibility-first component API.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-fd-border bg-fd-card shadow-sm">
                  <feature.icon size={20} className="text-fd-foreground" />
                </div>
                <h3 className="font-semibold text-fd-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-fd-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Categories Section */}
      <section className="border-b border-fd-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-fd-foreground">
              49 components, 10 categories
            </h2>
            <p className="mt-4 text-fd-muted-foreground">
              From simple atoms to complex patterns — everything you need to
              build modern interfaces.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/docs/components/${cat.slug}`}
                className="group flex items-center justify-between rounded-lg border border-fd-border bg-fd-card p-4 shadow-sm transition-all hover:border-fd-foreground/20 hover:shadow-md"
              >
                <span className="text-sm font-medium text-fd-foreground">
                  {cat.name}
                </span>
                <span className="rounded-md bg-fd-muted px-2 py-0.5 text-xs font-medium tabular-nums text-fd-muted-foreground">
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Code Section */}
      <section className="border-b border-fd-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-fd-foreground">
              Get started in seconds
            </h2>
            <p className="mt-4 text-fd-muted-foreground">
              Install the packages, import the styles, and start building.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-xl space-y-4">
            <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
              <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted/50 px-4 py-2.5">
                <Terminal size={14} className="text-fd-muted-foreground" />
                <span className="text-xs font-medium text-fd-muted-foreground">
                  Terminal
                </span>
              </div>
              <div className="p-4">
                <pre className="text-sm">
                  <code className="font-mono text-fd-foreground">
                    <span className="text-fd-muted-foreground select-none">$ </span>
                    pnpm add @malix/ui @malix/tokens
                  </code>
                </pre>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
              <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted/50 px-4 py-2.5">
                <Code2 size={14} className="text-fd-muted-foreground" />
                <span className="text-xs font-medium text-fd-muted-foreground">
                  app/layout.tsx
                </span>
              </div>
              <div className="p-4">
                <pre className="text-sm leading-relaxed">
                  <code className="font-mono text-fd-foreground">
                    {`import '@malix/tokens/tokens.css';
import '@malix/ui/styles.css';`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
              <div className="flex items-center gap-2 border-b border-fd-border bg-fd-muted/50 px-4 py-2.5">
                <Code2 size={14} className="text-fd-muted-foreground" />
                <span className="text-xs font-medium text-fd-muted-foreground">
                  Usage
                </span>
              </div>
              <div className="p-4">
                <pre className="text-sm leading-relaxed">
                  <code className="font-mono text-fd-foreground">
                    {`import { Button, Card } from '@malix/ui';

<Card title="Welcome">
  <Button hierarchy="primary">
    Get Started
  </Button>
</Card>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/docs/installation"
              className="inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground underline-offset-4 transition-colors hover:text-fd-foreground hover:underline"
            >
              Read the full installation guide
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-fd-foreground">
                Malix
              </span>
              <span className="text-sm text-fd-muted-foreground">
                Design System
              </span>
            </div>
            <p className="text-sm text-fd-muted-foreground">
              Built with precision. Designed for developers.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
