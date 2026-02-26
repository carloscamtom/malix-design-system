type PropDefinition = {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
};

export function PropsTable({ props }: { props: PropDefinition[] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-lg border border-fd-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-fd-border bg-fd-muted/50">
            <th className="px-4 py-3 text-left font-medium text-fd-foreground">
              Prop
            </th>
            <th className="px-4 py-3 text-left font-medium text-fd-foreground">
              Type
            </th>
            <th className="px-4 py-3 text-left font-medium text-fd-foreground">
              Default
            </th>
            <th className="px-4 py-3 text-left font-medium text-fd-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="border-b border-fd-border last:border-b-0"
            >
              <td className="px-4 py-3">
                <code className="rounded bg-fd-muted px-1.5 py-0.5 text-xs font-mono text-fd-foreground">
                  {prop.name}
                </code>
                {prop.required && (
                  <span className="ml-1 text-red-500 text-xs">*</span>
                )}
              </td>
              <td className="px-4 py-3">
                <code className="text-xs font-mono text-fd-muted-foreground">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs font-mono">
                  {prop.default ?? '-'}
                </code>
              </td>
              <td className="px-4 py-3 text-fd-muted-foreground">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
