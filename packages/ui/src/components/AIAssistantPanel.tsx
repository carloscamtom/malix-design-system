import React, { useState, useRef, useEffect } from 'react';
import { ChatBubble } from './ChatBubble';

export type AIAssistantMessage = {
  id: string;
  variant: 'ai' | 'user';
  content: string;
};

export type AIAssistantPanelProps = {
  /** Title shown in the header. */
  title?: string;
  /** Conversation messages. */
  messages: AIAssistantMessage[];
  /** Called when the user sends a new message. */
  onSend: (message: string) => void;
  /** Called when the close button is pressed. */
  onClose?: () => void;
  /** Placeholder text for the input field. */
  placeholder?: string;
  /** User initials shown next to user messages. */
  userInitials?: string;
  /** Disable input and send button. */
  disabled?: boolean;
  className?: string;
};

export function AIAssistantPanel({
  title = 'AI Assistant',
  messages,
  onSend,
  onClose,
  placeholder = 'Ask the AI assistant...',
  userInitials,
  disabled,
  className,
}: AIAssistantPanelProps) {
  const [draft, setDraft] = useState('');
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const text = draft.trim();
    if (!text) return;
    onSend(text);
    setDraft('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && draft.trim()) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`malix-ai-panel${className ? ` ${className}` : ''}`}>
      {/* Header */}
      <div className="malix-ai-panel__header">
        <span className="malix-ai-panel__logo">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          </svg>
        </span>
        <span className="malix-ai-panel__title">{title}</span>
        {onClose ? (
          <button
            type="button"
            className="malix-ai-panel__close"
            onClick={onClose}
            aria-label="Close assistant"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        ) : null}
      </div>

      {/* Messages body */}
      <div className="malix-ai-panel__body" ref={bodyRef}>
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            variant={msg.variant}
            message={msg.content}
            avatarInitials={msg.variant === 'user' ? userInitials : undefined}
          />
        ))}
      </div>

      {/* Footer input */}
      <div className="malix-ai-panel__footer">
        <div className="malix-ai-panel__input-row">
          <input
            type="text"
            className="malix-ai-panel__input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            aria-label={placeholder}
          />
          <button
            type="button"
            className="malix-ai-panel__send"
            onClick={handleSend}
            disabled={disabled || !draft.trim()}
            aria-label="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
