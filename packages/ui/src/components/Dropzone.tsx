import React, { useRef, useState } from 'react';

export type DropzoneProps = React.HTMLAttributes<HTMLDivElement> & {
  onDrop?: (files: File[]) => void;
  accept?: string;
  title?: string;
  hint?: string;
  disabled?: boolean;
};

export function Dropzone({
  onDrop,
  accept,
  title = 'Drop files here',
  hint = 'or click to browse',
  disabled = false,
  className,
  ...props
}: DropzoneProps) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (!disabled) setDragging(true);
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);
    if (disabled) return;
    const files = Array.from(event.dataTransfer.files);
    onDrop?.(files);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files ? Array.from(event.target.files) : [];
    if (files.length > 0) onDrop?.(files);
    event.target.value = '';
  }

  function handleClick() {
    if (!disabled) inputRef.current?.click();
  }

  return (
    <div
      className={`malix-dropzone${className ? ` ${className}` : ''}`}
      data-dragging={dragging}
      data-disabled={disabled}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      {...props}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        hidden
        aria-hidden="true"
      />
      <svg
        className="malix-dropzone__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m16 16-4-4-4 4" />
      </svg>
      <span className="malix-dropzone__title">{title}</span>
      <span className="malix-dropzone__hint">{hint}</span>
      <span className="malix-dropzone__browse-btn">Browse files</span>
    </div>
  );
}
