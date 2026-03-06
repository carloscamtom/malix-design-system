'use client';

import { useState } from 'react';
import { ChatInput } from '@camtomlabs/malix-design-system';

export function ChatInputDemo() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    setMessage('');
  };

  return (
    <div style={{ maxWidth: 480 }}>
      <ChatInput
        value={message}
        onChange={setMessage}
        onSend={handleSend}
        placeholder="Type a message..."
      />
    </div>
  );
}
