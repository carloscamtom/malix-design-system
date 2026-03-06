import React, { useState, useCallback, useRef, useEffect } from 'react';

export type SplitPaneProps = React.HTMLAttributes<HTMLDivElement> & {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  leftTitle?: string;
  rightTitle?: string;
  defaultSplit?: number;
};

export function SplitPane({
  leftPanel,
  rightPanel,
  leftTitle,
  rightTitle,
  defaultSplit = 50,
  className,
  ...props
}: SplitPaneProps) {
  const [split, setSplit] = useState(defaultSplit);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
  }, []);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95);
      setSplit(pct);
    }

    function onMouseUp() {
      dragging.current = false;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`malix-split-pane${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="malix-split-pane__left" style={{ width: `${split}%` }}>
        {leftTitle ? (
          <span className="malix-split-pane__panel-title">{leftTitle}</span>
        ) : null}
        {leftPanel}
      </div>

      <div
        className="malix-split-pane__handle"
        role="separator"
        aria-valuenow={Math.round(split)}
        aria-valuemin={5}
        aria-valuemax={95}
        aria-label="Resize panels"
        onMouseDown={onMouseDown}
      >
        <span className="malix-split-pane__handle-dot" aria-hidden="true" />
        <span className="malix-split-pane__handle-dot" aria-hidden="true" />
        <span className="malix-split-pane__handle-dot" aria-hidden="true" />
      </div>

      <div className="malix-split-pane__right" style={{ width: `${100 - split}%` }}>
        {rightTitle ? (
          <span className="malix-split-pane__panel-title">{rightTitle}</span>
        ) : null}
        {rightPanel}
      </div>
    </div>
  );
}
