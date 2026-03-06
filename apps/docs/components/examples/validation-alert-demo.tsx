'use client';

import { ValidationAlert } from '@camtomlabs/malix-design-system';

export function ValidationAlertDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ValidationAlert
        variant="error"
        title="Validation failed"
        message="Please check the required fields and try again."
      />
      <ValidationAlert
        variant="warning"
        title="Unsaved changes"
        message="You have unsaved changes that will be lost if you leave."
      />
      <ValidationAlert
        variant="info"
        title="Tip"
        message="You can use keyboard shortcuts to speed up your workflow."
      />
    </div>
  );
}
