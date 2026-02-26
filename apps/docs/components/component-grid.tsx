import Link from 'next/link';
import { getComponentsByCategory, type ComponentMeta } from '@/lib/registry';

function ComponentCard({ component }: { component: ComponentMeta }) {
  return (
    <Link
      href={`/docs/components/${component.categorySlug}/${component.slug}`}
      className="group rounded-lg border border-fd-border bg-fd-card p-4 transition-all hover:border-fd-foreground/20 hover:shadow-sm"
    >
      <h3 className="font-medium text-fd-foreground group-hover:text-fd-primary">
        {component.name}
      </h3>
      <p className="mt-1 text-sm text-fd-muted-foreground line-clamp-2">
        {component.description}
      </p>
    </Link>
  );
}

export function ComponentGrid() {
  const grouped = getComponentsByCategory();

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([category, components]) => (
        <section key={category}>
          <h2 className="mb-4 text-xl font-semibold text-fd-foreground">
            {category}
            <span className="ml-2 text-sm font-normal text-fd-muted-foreground">
              ({components.length})
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((comp) => (
              <ComponentCard key={comp.slug} component={comp} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
