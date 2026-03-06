'use client';

import { PricingCard } from '@camtomlabs/malix-design-system';

export function PricingCardDemo() {
  return (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <PricingCard
        planName="Free"
        price="$0"
        period="/month"
        description="For personal projects"
        features={['5 projects', '1 GB storage', 'Community support']}
        ctaLabel="Get Started"
        onCtaClick={() => {}}
      />
      <PricingCard
        planName="Pro"
        price="$19"
        period="/month"
        description="For growing teams"
        features={['Unlimited projects', '50 GB storage', 'Priority support', 'Advanced analytics']}
        ctaLabel="Upgrade to Pro"
        onCtaClick={() => {}}
        highlighted
      />
      <PricingCard
        planName="Enterprise"
        price="$49"
        period="/month"
        description="For large organizations"
        features={['Everything in Pro', '500 GB storage', 'Dedicated support', 'SSO & audit logs']}
        ctaLabel="Contact Sales"
        onCtaClick={() => {}}
      />
    </div>
  );
}
