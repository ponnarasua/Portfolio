import React from 'react';

export const LightBackground: React.FC = React.memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* CSS-only animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-theme-primary/10 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-theme-primary/5 rounded-full blur-2xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-theme-primary/8 rounded-full blur-xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>
    </div>
  );
});

LightBackground.displayName = 'LightBackground';
