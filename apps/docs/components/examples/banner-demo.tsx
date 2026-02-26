'use client';

import { Banner } from '@malix/ui';

export function BannerDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Banner variant="info">
        A new software update is available for download.
      </Banner>
      <Banner variant="success">
        Your changes have been saved successfully.
      </Banner>
      <Banner variant="warning">
        Your trial expires in 3 days. Upgrade now to keep access.
      </Banner>
      <Banner variant="error">
        Failed to connect to the server. Please try again later.
      </Banner>
    </div>
  );
}
