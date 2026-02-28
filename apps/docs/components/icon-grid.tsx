'use client';

import {
  Plus, Search, Settings, ChevronRight, ChevronDown, X,
  Check, AlertCircle, Info, AlertTriangle, Eye, EyeOff,
  Copy, Trash2, Edit2, Download, Upload, Filter,
  ArrowLeft, ArrowRight, MoreHorizontal, ExternalLink,
  Bell, User, Home, FileText, Calendar, Mail,
} from 'lucide-react';
import { useState } from 'react';

const icons = [
  { name: 'Plus', Icon: Plus },
  { name: 'Search', Icon: Search },
  { name: 'Settings', Icon: Settings },
  { name: 'ChevronRight', Icon: ChevronRight },
  { name: 'ChevronDown', Icon: ChevronDown },
  { name: 'X', Icon: X },
  { name: 'Check', Icon: Check },
  { name: 'AlertCircle', Icon: AlertCircle },
  { name: 'Info', Icon: Info },
  { name: 'AlertTriangle', Icon: AlertTriangle },
  { name: 'Eye', Icon: Eye },
  { name: 'EyeOff', Icon: EyeOff },
  { name: 'Copy', Icon: Copy },
  { name: 'Trash2', Icon: Trash2 },
  { name: 'Edit2', Icon: Edit2 },
  { name: 'Download', Icon: Download },
  { name: 'Upload', Icon: Upload },
  { name: 'Filter', Icon: Filter },
  { name: 'ArrowLeft', Icon: ArrowLeft },
  { name: 'ArrowRight', Icon: ArrowRight },
  { name: 'MoreHorizontal', Icon: MoreHorizontal },
  { name: 'ExternalLink', Icon: ExternalLink },
  { name: 'Bell', Icon: Bell },
  { name: 'User', Icon: User },
  { name: 'Home', Icon: Home },
  { name: 'FileText', Icon: FileText },
  { name: 'Calendar', Icon: Calendar },
  { name: 'Mail', Icon: Mail },
];

export function IconGrid() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`<${name} size={16} />`);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="not-prose my-6 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-7">
      {icons.map(({ name, Icon }) => (
        <button
          key={name}
          onClick={() => handleCopy(name)}
          className="flex flex-col items-center gap-2 rounded-lg border border-fd-border bg-fd-card p-3 text-fd-foreground transition-colors hover:bg-fd-muted"
          title={`Copy <${name} />`}
        >
          <Icon size={20} />
          <span className="text-[10px] text-fd-muted-foreground truncate w-full text-center">
            {copied === name ? 'Copied!' : name}
          </span>
        </button>
      ))}
    </div>
  );
}
