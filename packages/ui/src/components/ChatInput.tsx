import React from 'react';

export type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function ChatInput({
  value,
  onChange,
  onSend,
  placeholder = 'Type a message...',
  disabled,
  className,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && value.trim()) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className={`malix-chat-input${className ? ` ${className}` : ''}`}>
      <input
        type="text"
        className="malix-chat-input__field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        aria-label={placeholder}
      />
      <button
        type="button"
        className="malix-chat-input__send-btn"
        onClick={onSend}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
