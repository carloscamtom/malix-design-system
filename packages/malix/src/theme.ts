'use client';

import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export type MalixTheme = 'light' | 'dark' | 'system';

type ResolvedTheme = 'light' | 'dark';

interface MalixThemeContextValue {
  theme: MalixTheme;
  setTheme: (theme: MalixTheme) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'malix-theme';

const MalixThemeContext = createContext<MalixThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): MalixTheme | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  } catch {
    // localStorage unavailable
  }
  return null;
}

function resolveTheme(theme: MalixTheme): ResolvedTheme {
  return theme === 'system' ? getSystemTheme() : theme;
}

function applyTheme(resolved: ResolvedTheme): void {
  const root = document.documentElement;
  root.classList.toggle('dark', resolved === 'dark');
  root.setAttribute('data-theme', resolved);
}

interface MalixThemeProviderProps {
  children: ReactNode;
  defaultTheme?: MalixTheme;
}

export function MalixThemeProvider({ children, defaultTheme = 'system' }: MalixThemeProviderProps) {
  const [theme, setThemeState] = useState<MalixTheme>(() => getStoredTheme() ?? defaultTheme);

  const setTheme = useCallback((next: MalixTheme) => {
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable
    }
    applyTheme(resolveTheme(next));
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const resolved = resolveTheme(prev);
      const next: MalixTheme = resolved === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage unavailable
      }
      applyTheme(next);
      return next;
    });
  }, []);

  // Apply theme on mount
  useEffect(() => {
    applyTheme(resolveTheme(theme));
  }, [theme]);

  // Listen for system theme changes when in 'system' mode
  useEffect(() => {
    if (theme !== 'system') return;

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyTheme(getSystemTheme());
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return createElement(MalixThemeContext.Provider, { value }, children);
}

export function useMalixTheme(): MalixThemeContextValue {
  const ctx = useContext(MalixThemeContext);
  if (!ctx) {
    throw new Error('useMalixTheme must be used within a MalixThemeProvider');
  }
  return ctx;
}
