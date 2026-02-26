'use client';

import { OnboardingPopover } from '@malix/ui';

export function OnboardingPopoverDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <OnboardingPopover
        step={1}
        totalSteps={3}
        title="Welcome to your dashboard"
        description="This is your main workspace. Here you can manage projects, view analytics, and collaborate with your team."
        onNext={() => {}}
        onSkip={() => {}}
        nextLabel="Next"
      />
    </div>
  );
}
