// ABOUTME: Debug component to test token application

import { Button } from '@/components/ui/button';

export function DebugTokens() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-bold text-text-primary">Token Debug</h2>
      
      {/* Direct CSS variable test */}
      <div className="space-y-2">
        <div 
          className="p-4 rounded bg-fill-accent text-text-on-accent" 
        >
          Direct CSS Variable: var(--colors-fill-accent-default)
        </div>
        
        {/* Tailwind class test */}
        <div className="p-4 rounded bg-fill-accent text-text-on-accent">
          Tailwind Class: bg-fill-accent
        </div>
        
        {/* Test button using Button component */}
        <Button>
          Test Button with Button component
        </Button>
        
        {/* Debug info */}
        <div className="p-4 border rounded">
          <p className="text-text-primary">CSS Variable Value:</p>
          <pre className="text-xs text-text-secondary">
            {typeof window !== 'undefined' && 
              getComputedStyle(document.documentElement).getPropertyValue('--colors-fill-accent-default')}
          </pre>
        </div>
      </div>
    </div>
  );
}