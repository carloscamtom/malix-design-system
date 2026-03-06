'use client';

import { useState } from 'react';
import { AIAssistantPanel } from '@camtomlabs/malix-design-system';
import type { AIAssistantMessage } from '@camtomlabs/malix-design-system';

let nextId = 3;

const initialMessages: AIAssistantMessage[] = [
  { id: '1', variant: 'ai', content: 'Hi! I\'m your AI assistant. How can I help you today?' },
  { id: '2', variant: 'user', content: 'What components are available in Malix?' },
];

export function AIAssistantPanelDemo() {
  const [messages, setMessages] = useState<AIAssistantMessage[]>(initialMessages);

  const handleSend = (text: string) => {
    const userMsg: AIAssistantMessage = { id: String(nextId++), variant: 'user', content: text };
    const aiMsg: AIAssistantMessage = {
      id: String(nextId++),
      variant: 'ai',
      content: 'Malix includes 50+ components — buttons, inputs, navigation, data tables, overlays, and more. Check the sidebar for the full list!',
    };
    setMessages((prev) => [...prev, userMsg, aiMsg]);
  };

  return (
    <AIAssistantPanel
      messages={messages}
      onSend={handleSend}
      onClose={() => {}}
      userInitials="CG"
      placeholder="Ask the AI assistant..."
    />
  );
}
