'use client';

import { Stepper } from '@camtomlabs/malix-design-system';
import type { StepItem } from '@camtomlabs/malix-design-system';

const steps: StepItem[] = [
  { label: 'Account', status: 'completed' },
  { label: 'Profile', status: 'completed' },
  { label: 'Preferences', status: 'active' },
  { label: 'Review', status: 'pending' },
];

export function StepperDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Stepper steps={steps} />
    </div>
  );
}
