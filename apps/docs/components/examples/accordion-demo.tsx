'use client';

import { Accordion } from '@camtomlabs/malix-design-system';

export function AccordionDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Accordion title="Getting started" defaultOpen>
        <p>Follow the installation guide to set up the design system in your project. Import components from the @camtomlabs/malix-design-system package.</p>
      </Accordion>
      <Accordion title="Customization">
        <p>All components support className and style overrides. Use CSS custom properties to adjust theme colors and spacing.</p>
      </Accordion>
    </div>
  );
}
