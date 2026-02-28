export function SpacingScale() {
  const spaces = [
    { token: '--malix-space-xs', value: '4px', label: 'xs' },
    { token: '--malix-space-sm', value: '8px', label: 'sm' },
    { token: '--malix-space-md', value: '12px', label: 'md' },
    { token: '--malix-space-lg', value: '16px', label: 'lg' },
    { token: '--malix-space-xl', value: '24px', label: 'xl' },
    { token: '--malix-space-2xl', value: '32px', label: '2xl' },
    { token: '--malix-space-3xl', value: '48px', label: '3xl' },
  ];

  return (
    <div className="not-prose my-6 space-y-3">
      {spaces.map((s) => (
        <div key={s.token} className="flex items-center gap-4">
          <span className="w-10 shrink-0 text-right font-mono text-xs text-fd-muted-foreground">
            {s.label}
          </span>
          <div
            className="h-4 rounded-sm bg-fd-primary/80"
            style={{ width: s.value }}
          />
          <span className="font-mono text-xs text-fd-muted-foreground">{s.value}</span>
        </div>
      ))}
    </div>
  );
}
