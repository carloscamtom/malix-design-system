'use client';

import { StatCard } from '@malix/ui';

export function StatCardDemo() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
      <StatCard
        label="Revenue"
        value="$48,200"
        change="+12.5%"
        changeType="positive"
      />
      <StatCard
        label="Churn Rate"
        value="3.2%"
        change="+0.8%"
        changeType="negative"
      />
      <StatCard
        label="Active Users"
        value="1,024"
        change="0%"
        changeType="neutral"
      />
    </div>
  );
}
