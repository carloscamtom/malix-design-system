'use client';

import { useState } from 'react';
import { SelectionCard } from '@malix/ui';
import { Rocket, Zap, Shield } from 'lucide-react';

const options = [
  { id: 'starter', title: 'Starter', description: 'For individuals and small teams', icon: <Rocket size={20} /> },
  { id: 'growth', title: 'Growth', description: 'For scaling businesses', icon: <Zap size={20} /> },
  { id: 'enterprise', title: 'Enterprise', description: 'For large organizations', icon: <Shield size={20} /> },
];

export function SelectionCardDemo() {
  const [selected, setSelected] = useState('growth');

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {options.map((opt) => (
        <SelectionCard
          key={opt.id}
          title={opt.title}
          description={opt.description}
          icon={opt.icon}
          active={selected === opt.id}
          onClick={() => setSelected(opt.id)}
        />
      ))}
    </div>
  );
}
