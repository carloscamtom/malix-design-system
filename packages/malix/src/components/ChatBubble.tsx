import React from 'react';

export type ChatBubbleVariant = 'ai' | 'user';

export type ChatBubbleProps = {
  /** Which side of the conversation this bubble represents. */
  variant: ChatBubbleVariant;
  /** Text content of the message. */
  message?: string;
  /** Optional user initials shown as avatar next to user messages. */
  avatarInitials?: string;
  /** Override content via children instead of message prop. */
  children?: React.ReactNode;
  className?: string;
};

export function ChatBubble({
  variant,
  message,
  avatarInitials,
  children,
  className,
}: ChatBubbleProps) {
  const content = children ?? message;

  return (
    <div
      className={`malix-chat-bubble-row${className ? ` ${className}` : ''}`}
      data-variant={variant}
    >
      <div className="malix-chat-bubble" data-variant={variant}>
        <span className="malix-chat-bubble__text">{content}</span>
      </div>
      {variant === 'user' && avatarInitials ? (
        <span className="malix-chat-bubble__avatar">{avatarInitials}</span>
      ) : null}
    </div>
  );
}
