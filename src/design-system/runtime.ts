// ABOUTME: Runtime token manager - handles dynamic theme switching and token access

import type { ThemeMode } from './types';

// Theme state management
let currentTheme: ThemeMode = 'light';
const listeners = new Set<(theme: ThemeMode) => void>();

// Get current theme from DOM or localStorage
export function getCurrentTheme(): ThemeMode {
  // Check data attribute first
  const dataTheme = document.documentElement.getAttribute('data-theme');
  if (dataTheme && ['light', 'dark', 'contrast'].includes(dataTheme)) {
    return dataTheme as ThemeMode;
  }
  
  // Check localStorage
  const stored = localStorage.getItem('theme');
  if (stored && ['light', 'dark', 'contrast'].includes(stored)) {
    return stored as ThemeMode;
  }
  
  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

// Set theme
export function setTheme(theme: ThemeMode): void {
  currentTheme = theme;
  
  // Update DOM
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update localStorage
  localStorage.setItem('theme', theme);
  
  // Notify listeners
  listeners.forEach(listener => listener(theme));
}

// Subscribe to theme changes
export function subscribeToTheme(listener: (theme: ThemeMode) => void): () => void {
  listeners.add(listener);
  
  // Return unsubscribe function
  return () => {
    listeners.delete(listener);
  };
}

// Initialize theme on load
export function initializeTheme(): void {
  const theme = getCurrentTheme();
  setTheme(theme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only update if user hasn't explicitly set a theme
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// Get CSS variable value at runtime
export function getCSSVariable(variableName: string): string {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variableName);
  return value.trim();
}

// Set CSS variable value at runtime
export function setCSSVariable(variableName: string, value: string): void {
  document.documentElement.style.setProperty(variableName, value);
}

// Get token value by path (e.g., "colors.text.primary")
export function getTokenValue(path: string): string {
  const cssVarName = `--${path.replace(/\./g, '-')}`;
  return getCSSVariable(cssVarName);
}

// Batch update CSS variables
export function updateTokens(updates: Record<string, string>): void {
  Object.entries(updates).forEach(([path, value]) => {
    const cssVarName = `--${path.replace(/\./g, '-')}`;
    setCSSVariable(cssVarName, value);
  });
}

// Token utilities for responsive design
export function getResponsiveToken(tokens: {
  base: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}): string {
  // This would need to be hooked into your responsive system
  // For now, return base token
  return getTokenValue(tokens.base);
}

// Initialize on import if in browser
if (typeof document !== 'undefined') {
  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
  } else {
    initializeTheme();
  }
}