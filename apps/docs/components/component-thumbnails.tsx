/**
 * CSS-based visual preview thumbnails for each Malix component.
 * These render lightweight skeleton representations similar to
 * Geist / Atlassian design-system component browsers.
 */

/* ------------------------------------------------------------------ */
/*  Individual thumbnail renderers                                     */
/* ------------------------------------------------------------------ */

function ButtonThumb() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 rounded-md bg-[#004a7c] px-5 py-1.5 text-[11px] font-medium text-white">
        Button
      </div>
      <div className="h-8 rounded-md border border-[#e5e7eb] bg-white px-5 py-1.5 text-[11px] font-medium text-[#111827]">
        Secondary
      </div>
    </div>
  );
}

function InputThumb() {
  return (
    <div className="w-48">
      <div className="flex h-9 items-center rounded-md border border-[#e5e7eb] bg-white px-3">
        <span className="text-[11px] text-[#9ca3af]">Enter text...</span>
      </div>
    </div>
  );
}

function InputGroupThumb() {
  return (
    <div className="w-48 space-y-1">
      <div className="text-[10px] font-medium text-[#111827]">Label</div>
      <div className="flex h-8 items-center rounded-md border border-[#e5e7eb] bg-white px-3">
        <span className="text-[10px] text-[#9ca3af]">Placeholder</span>
      </div>
      <div className="text-[9px] text-[#6b7280]">Helper text</div>
    </div>
  );
}

function SearchInputThumb() {
  return (
    <div className="w-48">
      <div className="flex h-9 items-center gap-2 rounded-md border border-[#e5e7eb] bg-white px-3">
        <svg className="size-3 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span className="text-[11px] text-[#9ca3af]">Search...</span>
      </div>
    </div>
  );
}

function TextareaThumb() {
  return (
    <div className="w-48">
      <div className="flex h-16 items-start rounded-md border border-[#e5e7eb] bg-white p-2">
        <span className="text-[10px] text-[#9ca3af]">Type message...</span>
      </div>
    </div>
  );
}

function SelectThumb() {
  return (
    <div className="w-48">
      <div className="flex h-9 items-center justify-between rounded-md border border-[#e5e7eb] bg-white px-3">
        <span className="text-[11px] text-[#9ca3af]">Select option</span>
        <svg className="size-3 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  );
}

function SelectGroupThumb() {
  return (
    <div className="w-48 space-y-1">
      <div className="text-[10px] font-medium text-[#111827]">Label</div>
      <div className="flex h-8 items-center justify-between rounded-md border border-[#e5e7eb] bg-white px-3">
        <span className="text-[10px] text-[#9ca3af]">Choose...</span>
        <svg className="size-3 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  );
}

function DateInputThumb() {
  return (
    <div className="w-48">
      <div className="flex h-9 items-center justify-between rounded-md border border-[#e5e7eb] bg-white px-3">
        <span className="text-[11px] text-[#9ca3af]">mm/dd/yyyy</span>
        <svg className="size-3 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
      </div>
    </div>
  );
}

function ToggleThumb() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-5 w-9 rounded-full bg-[#004a7c]">
        <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
      </div>
      <div className="relative h-5 w-9 rounded-full bg-[#e5e7eb]">
        <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  );
}

function CheckboxThumb() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded border border-[#004a7c] bg-[#004a7c]">
          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <span className="text-[10px] text-[#111827]">Selected</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded border border-[#e5e7eb] bg-white" />
        <span className="text-[10px] text-[#111827]">Unselected</span>
      </div>
    </div>
  );
}

function RadioThumb() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#004a7c]">
          <div className="h-2 w-2 rounded-full bg-[#004a7c]" />
        </div>
        <span className="text-[10px] text-[#111827]">Option A</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full border-2 border-[#e5e7eb]" />
        <span className="text-[10px] text-[#111827]">Option B</span>
      </div>
    </div>
  );
}

function ChatInputThumb() {
  return (
    <div className="w-48">
      <div className="flex h-9 items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3">
        <span className="flex-1 text-[10px] text-[#9ca3af]">Message...</span>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004a7c]">
          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  );
}

function SidebarItemThumb() {
  return (
    <div className="w-40 space-y-0.5">
      <div className="flex h-7 items-center gap-2 rounded-md bg-[#e6f0f7] px-2">
        <div className="h-3 w-3 rounded bg-[#004a7c]/30" />
        <span className="text-[10px] font-medium text-[#004a7c]">Dashboard</span>
      </div>
      <div className="flex h-7 items-center gap-2 rounded-md px-2 hover:bg-[#f3f4f6]">
        <div className="h-3 w-3 rounded bg-[#9ca3af]/30" />
        <span className="text-[10px] text-[#6b7280]">Settings</span>
      </div>
    </div>
  );
}

function SidebarPanelThumb() {
  return (
    <div className="flex h-28 w-36 flex-col rounded-md border border-[#e5e7eb] bg-[#fbfbfb]">
      <div className="flex items-center gap-1.5 border-b border-[#e5e7eb] px-2 py-1.5">
        <div className="h-2 w-2 rounded bg-[#004a7c]/30" />
        <span className="text-[9px] font-semibold text-[#111827]">App</span>
      </div>
      <div className="flex flex-1 flex-col gap-0.5 p-1">
        <div className="flex h-5 items-center gap-1.5 rounded bg-[#e6f0f7] px-1.5">
          <div className="h-2 w-2 rounded bg-[#004a7c]/20" />
          <div className="h-1.5 w-10 rounded-full bg-[#004a7c]/40" />
        </div>
        <div className="flex h-5 items-center gap-1.5 px-1.5">
          <div className="h-2 w-2 rounded bg-[#9ca3af]/20" />
          <div className="h-1.5 w-12 rounded-full bg-[#9ca3af]/30" />
        </div>
        <div className="flex h-5 items-center gap-1.5 px-1.5">
          <div className="h-2 w-2 rounded bg-[#9ca3af]/20" />
          <div className="h-1.5 w-8 rounded-full bg-[#9ca3af]/30" />
        </div>
      </div>
    </div>
  );
}

function FlyoutMenuThumb() {
  return (
    <div className="w-36 rounded-md border border-[#e5e7eb] bg-white p-1 shadow-sm">
      <div className="flex h-6 items-center gap-2 rounded px-2 bg-[#f3f4f6]">
        <div className="h-2 w-2 rounded bg-[#9ca3af]/40" />
        <span className="text-[9px] text-[#111827]">Edit</span>
      </div>
      <div className="flex h-6 items-center gap-2 rounded px-2">
        <div className="h-2 w-2 rounded bg-[#9ca3af]/40" />
        <span className="text-[9px] text-[#6b7280]">Duplicate</span>
      </div>
      <div className="my-0.5 h-px bg-[#e5e7eb]" />
      <div className="flex h-6 items-center gap-2 rounded px-2">
        <div className="h-2 w-2 rounded bg-[#dc2626]/30" />
        <span className="text-[9px] text-[#dc2626]">Delete</span>
      </div>
    </div>
  );
}

function TabBarThumb() {
  return (
    <div className="flex gap-0 border-b border-[#e5e7eb]">
      <div className="border-b-2 border-[#004a7c] px-3 py-1.5">
        <span className="text-[10px] font-medium text-[#004a7c]">Tab 1</span>
      </div>
      <div className="px-3 py-1.5">
        <span className="text-[10px] text-[#6b7280]">Tab 2</span>
      </div>
      <div className="px-3 py-1.5">
        <span className="text-[10px] text-[#6b7280]">Tab 3</span>
      </div>
    </div>
  );
}

function FilterTabsThumb() {
  return (
    <div className="flex gap-1">
      <div className="flex items-center gap-1 rounded-full bg-[#004a7c] px-2.5 py-1">
        <span className="text-[9px] font-medium text-white">All</span>
        <span className="rounded-full bg-white/20 px-1 text-[8px] text-white">24</span>
      </div>
      <div className="flex items-center gap-1 rounded-full border border-[#e5e7eb] px-2.5 py-1">
        <span className="text-[9px] text-[#6b7280]">Active</span>
        <span className="rounded-full bg-[#f3f4f6] px-1 text-[8px] text-[#6b7280]">12</span>
      </div>
    </div>
  );
}

function BreadcrumbThumb() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[10px] text-[#6b7280]">Home</span>
      <svg className="h-2.5 w-2.5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m9 18 6-6-6-6"/></svg>
      <span className="text-[10px] text-[#6b7280]">Products</span>
      <svg className="h-2.5 w-2.5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m9 18 6-6-6-6"/></svg>
      <span className="text-[10px] font-medium text-[#111827]">Detail</span>
    </div>
  );
}

function HeaderThumb() {
  return (
    <div className="flex w-48 items-center justify-between border-b border-[#e5e7eb] pb-2">
      <div>
        <div className="text-[11px] font-semibold text-[#111827]">Page Title</div>
        <div className="text-[9px] text-[#6b7280]">Description text</div>
      </div>
      <div className="h-6 rounded-md bg-[#004a7c] px-2 py-0.5 text-[9px] text-white">Action</div>
    </div>
  );
}

function BannerThumb() {
  return (
    <div className="w-48 space-y-1.5">
      <div className="flex items-center gap-1.5 rounded-md bg-[#eff6ff] px-2.5 py-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#2563eb]" />
        <span className="text-[9px] text-[#1e40af]">Information message</span>
      </div>
      <div className="flex items-center gap-1.5 rounded-md bg-[#fef2f2] px-2.5 py-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#dc2626]" />
        <span className="text-[9px] text-[#991b1b]">Error message</span>
      </div>
    </div>
  );
}

function BadgeThumb() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="rounded bg-[#004a7c] px-1.5 py-0.5 text-[9px] font-medium text-white">New</span>
      <span className="rounded bg-[#059669] px-1.5 py-0.5 text-[9px] font-medium text-white">Active</span>
      <span className="rounded bg-[#d97706] px-1.5 py-0.5 text-[9px] font-medium text-white">Beta</span>
    </div>
  );
}

function PillThumb() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="inline-flex items-center gap-1 rounded-full bg-[#ecfdf5] px-2 py-0.5 text-[9px] font-medium text-[#065f46]">
        <div className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
        Success
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-[#fef2f2] px-2 py-0.5 text-[9px] font-medium text-[#991b1b]">
        <div className="h-1.5 w-1.5 rounded-full bg-[#dc2626]" />
        Error
      </span>
    </div>
  );
}

function StatusDotThumb() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-[#059669]" />
        <span className="text-[9px] text-[#111827]">Online</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-[#d97706]" />
        <span className="text-[9px] text-[#111827]">Away</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-2 w-2 rounded-full bg-[#9ca3af]" />
        <span className="text-[9px] text-[#111827]">Offline</span>
      </div>
    </div>
  );
}

function OperationStatusThumb() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5 rounded-md border border-[#e5e7eb] px-2 py-1">
        <div className="h-2.5 w-2.5 rounded-full bg-[#059669]" />
        <span className="text-[9px] text-[#111827]">Completed</span>
      </div>
    </div>
  );
}

function ValidationAlertThumb() {
  return (
    <div className="w-44 space-y-1">
      <div className="flex items-center gap-1 text-[9px] text-[#dc2626]">
        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        This field is required
      </div>
      <div className="flex items-center gap-1 text-[9px] text-[#059669]">
        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M5 13l4 4L19 7"/></svg>
        Looks good!
      </div>
    </div>
  );
}

function ProgressBarThumb() {
  return (
    <div className="w-44 space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[9px] text-[#111827]">Progress</span>
        <span className="text-[9px] text-[#6b7280]">68%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e5e7eb]">
        <div className="h-full w-[68%] rounded-full bg-[#004a7c]" />
      </div>
    </div>
  );
}

function TooltipThumb() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="rounded-md bg-[#111827] px-2 py-1 text-[9px] text-white shadow-sm">
        Tooltip text
      </div>
      <div className="h-1.5 w-1.5 rotate-45 bg-[#111827]" style={{ marginTop: -5 }} />
      <div className="mt-1 h-6 rounded-md border border-[#e5e7eb] bg-white px-3 py-1 text-[9px] text-[#6b7280]">
        Hover me
      </div>
    </div>
  );
}

function EmptyStateThumb() {
  return (
    <div className="flex w-44 flex-col items-center gap-1.5 rounded-md border border-dashed border-[#e5e7eb] p-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3f4f6]">
        <svg className="h-3 w-3 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
      </div>
      <span className="text-[9px] font-medium text-[#111827]">No items yet</span>
      <span className="text-[8px] text-[#6b7280]">Get started by adding one</span>
    </div>
  );
}

function CardThumb() {
  return (
    <div className="w-44 rounded-lg border border-[#e5e7eb] bg-white p-3 shadow-sm">
      <div className="text-[10px] font-semibold text-[#111827]">Card Title</div>
      <div className="mt-1 space-y-1">
        <div className="h-1.5 w-full rounded-full bg-[#f3f4f6]" />
        <div className="h-1.5 w-3/4 rounded-full bg-[#f3f4f6]" />
      </div>
    </div>
  );
}

function DividerThumb() {
  return (
    <div className="flex w-44 flex-col gap-2">
      <div className="h-1.5 w-20 rounded-full bg-[#f3f4f6]" />
      <div className="h-px w-full bg-[#e5e7eb]" />
      <div className="h-1.5 w-24 rounded-full bg-[#f3f4f6]" />
    </div>
  );
}

function SectionHeaderThumb() {
  return (
    <div className="flex w-48 items-center justify-between">
      <div>
        <div className="text-[11px] font-semibold text-[#111827]">Section</div>
        <div className="text-[8px] text-[#6b7280]">Section description</div>
      </div>
      <div className="h-5 rounded border border-[#e5e7eb] px-1.5 py-0.5 text-[8px] text-[#6b7280]">Edit</div>
    </div>
  );
}

function SplitPaneThumb() {
  return (
    <div className="flex h-20 w-44 overflow-hidden rounded-md border border-[#e5e7eb]">
      <div className="flex flex-1 items-center justify-center bg-[#f9fafb]">
        <div className="h-1.5 w-8 rounded-full bg-[#d1d5db]" />
      </div>
      <div className="w-px bg-[#e5e7eb]" />
      <div className="flex flex-1 items-center justify-center bg-white">
        <div className="h-1.5 w-8 rounded-full bg-[#d1d5db]" />
      </div>
    </div>
  );
}

function ModalThumb() {
  return (
    <div className="relative h-24 w-44 rounded-md bg-[#f3f4f6]/50">
      <div className="absolute inset-x-3 top-4 rounded-lg border border-[#e5e7eb] bg-white p-2 shadow-lg">
        <div className="text-[9px] font-semibold text-[#111827]">Confirm action</div>
        <div className="mt-1 h-1 w-16 rounded-full bg-[#f3f4f6]" />
        <div className="mt-2 flex justify-end gap-1">
          <div className="h-4 rounded bg-[#f3f4f6] px-2 text-[7px] leading-4 text-[#6b7280]">Cancel</div>
          <div className="h-4 rounded bg-[#004a7c] px-2 text-[7px] leading-4 text-white">OK</div>
        </div>
      </div>
    </div>
  );
}

function OverlayThumb() {
  return (
    <div className="relative h-20 w-44 rounded-md bg-[#11182710]">
      <div className="absolute right-0 top-0 h-full w-24 rounded-r-md border border-[#e5e7eb] bg-white p-2 shadow-lg">
        <div className="h-1.5 w-10 rounded-full bg-[#d1d5db]" />
        <div className="mt-1.5 h-1 w-14 rounded-full bg-[#f3f4f6]" />
        <div className="mt-1 h-1 w-12 rounded-full bg-[#f3f4f6]" />
      </div>
    </div>
  );
}

function GlassPopoverThumb() {
  return (
    <div className="w-40 rounded-lg border border-white/50 bg-[#f3f3f3]/70 p-2.5 shadow-sm backdrop-blur-sm">
      <div className="h-1.5 w-16 rounded-full bg-[#111827]/20" />
      <div className="mt-1.5 h-1 w-20 rounded-full bg-[#111827]/10" />
      <div className="mt-1 h-1 w-14 rounded-full bg-[#111827]/10" />
    </div>
  );
}

function OnboardingPopoverThumb() {
  return (
    <div className="w-40 rounded-lg border border-[#e5e7eb] bg-white p-2 shadow-md">
      <div className="text-[9px] font-semibold text-[#111827]">Step 1 of 3</div>
      <div className="mt-1 h-1 w-24 rounded-full bg-[#f3f4f6]" />
      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-0.5">
          <div className="h-1 w-3 rounded-full bg-[#004a7c]" />
          <div className="h-1 w-3 rounded-full bg-[#e5e7eb]" />
          <div className="h-1 w-3 rounded-full bg-[#e5e7eb]" />
        </div>
        <div className="h-4 rounded bg-[#004a7c] px-1.5 text-[7px] leading-4 text-white">Next</div>
      </div>
    </div>
  );
}

function DataTableThumb() {
  return (
    <div className="w-48 overflow-hidden rounded-md border border-[#e5e7eb]">
      <div className="flex gap-0 border-b border-[#e5e7eb] bg-[#f9fafb] px-2 py-1">
        <div className="flex-1 text-[8px] font-medium text-[#6b7280]">Name</div>
        <div className="w-12 text-[8px] font-medium text-[#6b7280]">Status</div>
        <div className="w-10 text-[8px] font-medium text-[#6b7280]">Role</div>
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-0 border-b border-[#e5e7eb] last:border-0 px-2 py-1">
          <div className="flex-1"><div className="h-1.5 w-12 rounded-full bg-[#d1d5db]" /></div>
          <div className="w-12"><div className="h-1.5 w-8 rounded-full bg-[#ecfdf5]" /></div>
          <div className="w-10"><div className="h-1.5 w-6 rounded-full bg-[#f3f4f6]" /></div>
        </div>
      ))}
    </div>
  );
}

function PaginationThumb() {
  return (
    <div className="flex items-center gap-0.5">
      <div className="flex h-6 w-6 items-center justify-center rounded border border-[#e5e7eb] text-[9px] text-[#6b7280]">&lt;</div>
      <div className="flex h-6 w-6 items-center justify-center rounded bg-[#004a7c] text-[9px] text-white">1</div>
      <div className="flex h-6 w-6 items-center justify-center rounded border border-[#e5e7eb] text-[9px] text-[#111827]">2</div>
      <div className="flex h-6 w-6 items-center justify-center rounded border border-[#e5e7eb] text-[9px] text-[#111827]">3</div>
      <div className="flex h-6 w-6 items-center justify-center rounded border border-[#e5e7eb] text-[9px] text-[#6b7280]">&gt;</div>
    </div>
  );
}

function StepperThumb() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004a7c] text-[8px] text-white">
        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M5 13l4 4L19 7"/></svg>
      </div>
      <div className="h-px w-4 bg-[#004a7c]" />
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004a7c] text-[8px] text-white">2</div>
      <div className="h-px w-4 bg-[#e5e7eb]" />
      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#e5e7eb] text-[8px] text-[#6b7280]">3</div>
    </div>
  );
}

function StatCardThumb() {
  return (
    <div className="w-36 rounded-lg border border-[#e5e7eb] bg-white p-2.5">
      <div className="text-[8px] text-[#6b7280]">Revenue</div>
      <div className="mt-0.5 text-[14px] font-bold text-[#111827]">$12.4k</div>
      <div className="mt-0.5 text-[8px] text-[#059669]">+12.5%</div>
    </div>
  );
}

function FileCardThumb() {
  return (
    <div className="flex w-44 items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white p-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#eff6ff]">
        <svg className="h-3.5 w-3.5 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[9px] font-medium text-[#111827]">document.pdf</div>
        <div className="text-[8px] text-[#6b7280]">2.4 MB</div>
      </div>
    </div>
  );
}

function AvatarThumb() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004a7c] text-[10px] font-medium text-white">JD</div>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#059669] text-[9px] font-medium text-white">AB</div>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#d97706] text-[8px] font-medium text-white">CK</div>
    </div>
  );
}

function SegmentedControlThumb() {
  return (
    <div className="flex rounded-lg border border-[#e5e7eb] bg-[#f3f4f6] p-0.5">
      <div className="rounded-md bg-white px-3 py-1 text-[9px] font-medium text-[#111827] shadow-sm">Day</div>
      <div className="px-3 py-1 text-[9px] text-[#6b7280]">Week</div>
      <div className="px-3 py-1 text-[9px] text-[#6b7280]">Month</div>
    </div>
  );
}

function AccordionThumb() {
  return (
    <div className="w-44 divide-y divide-[#e5e7eb] rounded-md border border-[#e5e7eb]">
      <div className="flex items-center justify-between px-2.5 py-1.5">
        <span className="text-[9px] font-medium text-[#111827]">Section 1</span>
        <svg className="h-2.5 w-2.5 rotate-180 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6"/></svg>
      </div>
      <div className="bg-[#f9fafb] px-2.5 py-1.5">
        <div className="h-1 w-24 rounded-full bg-[#d1d5db]" />
        <div className="mt-1 h-1 w-16 rounded-full bg-[#e5e7eb]" />
      </div>
      <div className="flex items-center justify-between px-2.5 py-1.5">
        <span className="text-[9px] font-medium text-[#111827]">Section 2</span>
        <svg className="h-2.5 w-2.5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </div>
  );
}

function SelectionCardThumb() {
  return (
    <div className="flex gap-1.5">
      <div className="flex-1 rounded-md border-2 border-[#004a7c] bg-[#e6f0f7] p-1.5">
        <div className="h-1.5 w-8 rounded-full bg-[#004a7c]/40" />
        <div className="mt-1 h-1 w-12 rounded-full bg-[#004a7c]/20" />
      </div>
      <div className="flex-1 rounded-md border border-[#e5e7eb] bg-white p-1.5">
        <div className="h-1.5 w-8 rounded-full bg-[#d1d5db]" />
        <div className="mt-1 h-1 w-12 rounded-full bg-[#e5e7eb]" />
      </div>
    </div>
  );
}

function PricingCardThumb() {
  return (
    <div className="w-32 rounded-lg border border-[#e5e7eb] bg-white p-2.5">
      <div className="text-[9px] font-medium text-[#6b7280]">Pro Plan</div>
      <div className="mt-0.5 text-[13px] font-bold text-[#111827]">$29<span className="text-[8px] font-normal text-[#6b7280]">/mo</span></div>
      <div className="mt-1.5 space-y-0.5">
        <div className="h-1 w-16 rounded-full bg-[#f3f4f6]" />
        <div className="h-1 w-12 rounded-full bg-[#f3f4f6]" />
      </div>
      <div className="mt-2 h-5 w-full rounded bg-[#004a7c] text-center text-[8px] font-medium leading-5 text-white">Upgrade</div>
    </div>
  );
}

function UserProfilePopoverThumb() {
  return (
    <div className="w-36 rounded-lg border border-[#e5e7eb] bg-white p-2 shadow-sm">
      <div className="flex items-center gap-1.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#004a7c] text-[8px] text-white">JD</div>
        <div>
          <div className="text-[9px] font-medium text-[#111827]">Jane Doe</div>
          <div className="text-[7px] text-[#6b7280]">jane@example.com</div>
        </div>
      </div>
      <div className="my-1.5 h-px bg-[#e5e7eb]" />
      <div className="space-y-0.5">
        <div className="h-4 rounded px-1 text-[8px] leading-4 text-[#6b7280]">Settings</div>
        <div className="h-4 rounded px-1 text-[8px] leading-4 text-[#dc2626]">Sign out</div>
      </div>
    </div>
  );
}

function CreditsIndicatorThumb() {
  return (
    <div className="flex items-center gap-2 rounded-md border border-[#e5e7eb] bg-white px-2.5 py-1.5">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#e5e7eb]">
        <div className="h-full w-3/4 rounded-full bg-[#004a7c]" />
      </div>
      <span className="text-[9px] font-medium text-[#111827]">75 / 100</span>
    </div>
  );
}

function LanguageSelectorThumb() {
  return (
    <div className="flex h-7 items-center gap-1.5 rounded-md border border-[#e5e7eb] bg-white px-2">
      <span className="text-[10px]">🌐</span>
      <span className="text-[9px] text-[#111827]">English</span>
      <svg className="h-2.5 w-2.5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="m6 9 6 6 6-6"/></svg>
    </div>
  );
}

function DropzoneThumb() {
  return (
    <div className="flex w-44 flex-col items-center gap-1 rounded-lg border-2 border-dashed border-[#e5e7eb] bg-[#f9fafb] p-3">
      <svg className="h-5 w-5 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
      <span className="text-[9px] font-medium text-[#111827]">Drop files here</span>
      <span className="text-[8px] text-[#6b7280]">or click to browse</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Thumbnail registry                                                 */
/* ------------------------------------------------------------------ */

const thumbnails: Record<string, () => React.ReactNode> = {
  button: ButtonThumb,
  input: InputThumb,
  'input-group': InputGroupThumb,
  'search-input': SearchInputThumb,
  textarea: TextareaThumb,
  select: SelectThumb,
  'select-group': SelectGroupThumb,
  'date-input': DateInputThumb,
  toggle: ToggleThumb,
  checkbox: CheckboxThumb,
  radio: RadioThumb,
  'chat-input': ChatInputThumb,
  'sidebar-item': SidebarItemThumb,
  'sidebar-panel': SidebarPanelThumb,
  'flyout-menu': FlyoutMenuThumb,
  'tab-bar': TabBarThumb,
  'filter-tabs': FilterTabsThumb,
  breadcrumb: BreadcrumbThumb,
  header: HeaderThumb,
  banner: BannerThumb,
  badge: BadgeThumb,
  pill: PillThumb,
  'status-dot': StatusDotThumb,
  'operation-status': OperationStatusThumb,
  'validation-alert': ValidationAlertThumb,
  'progress-bar': ProgressBarThumb,
  tooltip: TooltipThumb,
  'empty-state': EmptyStateThumb,
  card: CardThumb,
  divider: DividerThumb,
  'section-header': SectionHeaderThumb,
  'split-pane': SplitPaneThumb,
  modal: ModalThumb,
  overlay: OverlayThumb,
  'glass-popover': GlassPopoverThumb,
  'onboarding-popover': OnboardingPopoverThumb,
  'data-table': DataTableThumb,
  pagination: PaginationThumb,
  stepper: StepperThumb,
  'stat-card': StatCardThumb,
  'file-card': FileCardThumb,
  avatar: AvatarThumb,
  'segmented-control': SegmentedControlThumb,
  accordion: AccordionThumb,
  'selection-card': SelectionCardThumb,
  'pricing-card': PricingCardThumb,
  'user-profile-popover': UserProfilePopoverThumb,
  'credits-indicator': CreditsIndicatorThumb,
  'language-selector': LanguageSelectorThumb,
  dropzone: DropzoneThumb,
};

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */

export function ComponentThumbnail({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Thumb = thumbnails[slug];
  if (!Thumb) {
    return (
      <div className={`flex items-center justify-center ${className ?? ''}`}>
        <div className="h-4 w-16 rounded bg-fd-muted" />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center ${className ?? ''}`}>
      <Thumb />
    </div>
  );
}
