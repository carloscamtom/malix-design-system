import Link from 'next/link';
import { getComponentsByCategory, type ComponentMeta } from '@/lib/registry';
import { ComponentThumbnail } from '@/components/component-thumbnails';

function ComponentCard({ component }: { component: ComponentMeta }) {
  return (
    <Link
      href={`/docs/components/${component.categorySlug}/${component.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-fd-border bg-fd-card transition-all hover:border-fd-foreground/20 hover:shadow-md"
    >
      {/* Visual preview area */}
      <div className="flex h-32 items-center justify-center border-b border-fd-border bg-fd-muted/30 p-4 transition-colors group-hover:bg-fd-muted/50">
        <ComponentThumbnail slug={component.slug} />
      </div>
      {/* Label */}
      <div className="px-4 py-3">
        <h3 className="text-sm font-medium text-fd-foreground group-hover:text-fd-primary">
          {component.name}
        </h3>
        <p className="mt-0.5 text-xs text-fd-muted-foreground line-clamp-1">
          {component.description}
        </p>
      </div>
    </Link>
  );
}

export function ComponentGrid() {
  const grouped = getComponentsByCategory();

  return (
    <div className="space-y-12">
      {Object.entries(grouped).map(([category, components]) => (
        <section key={category}>
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-xl font-semibold text-fd-foreground">
              {category}
            </h2>
            <span className="rounded-md bg-fd-muted px-2 py-0.5 text-xs font-medium tabular-nums text-fd-muted-foreground">
              {components.length}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((comp) => (
              <ComponentCard key={comp.slug} component={comp} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
