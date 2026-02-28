'use client';

import { useState } from 'react';

type ColorDef = {
  token: string;
  value: string;
  label: string;
};

function Swatch({ token, value, label }: ColorDef) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`var(${token})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col gap-2 text-left transition-transform hover:scale-[1.02] active:scale-[0.98]"
      title={`Copy var(${token})`}
    >
      <div
        className="h-16 w-full rounded-lg border border-fd-border shadow-sm transition-shadow group-hover:shadow-md"
        style={{ background: value }}
      />
      <div className="space-y-0.5">
        <p className="text-xs font-medium text-fd-foreground">{label}</p>
        <p className="font-mono text-[11px] text-fd-muted-foreground">
          {copied ? 'Copied!' : value}
        </p>
      </div>
    </button>
  );
}

export function ColorSwatch({ colors }: { colors: ColorDef[] }) {
  return (
    <div className="not-prose my-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {colors.map((c) => (
        <Swatch key={c.token} {...c} />
      ))}
    </div>
  );
}
