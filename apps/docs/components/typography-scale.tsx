export function TypographyScale() {
  const sizes = [
    { token: '--malix-text-2xl', size: '24px', label: 'text-2xl', sample: 'Page heading' },
    { token: '--malix-text-xl', size: '20px', label: 'text-xl', sample: 'Section title' },
    { token: '--malix-text-lg', size: '16px', label: 'text-lg', sample: 'Card title or subtitle' },
    { token: '--malix-text-base', size: '14px', label: 'text-base', sample: 'Body text, inputs, and buttons' },
    { token: '--malix-text-sm', size: '13px', label: 'text-sm', sample: 'Secondary text and descriptions' },
    { token: '--malix-text-xs', size: '12px', label: 'text-xs', sample: 'Captions, badges, and helper text' },
  ];

  return (
    <div className="not-prose my-6 space-y-0 divide-y divide-fd-border rounded-lg border border-fd-border overflow-hidden">
      {sizes.map((s) => (
        <div key={s.token} className="flex items-center gap-4 px-4 py-4 sm:gap-6">
          <div className="w-20 shrink-0">
            <span className="rounded bg-fd-muted px-1.5 py-0.5 font-mono text-[11px] text-fd-muted-foreground">
              {s.size}
            </span>
          </div>
          <p className="text-fd-foreground" style={{ fontSize: s.size, fontWeight: 500, lineHeight: 1.4 }}>
            {s.sample}
          </p>
        </div>
      ))}
    </div>
  );
}
