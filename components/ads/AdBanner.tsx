'use client';

import AdSense from './AdSense';

interface AdBannerProps {
  slot: string;
  className?: string;
}

export function AdBannerBottom({ slot, className = '' }: AdBannerProps) {
  return (
    <div className={`w-full max-w-full overflow-hidden py-2 ${className}`}>
      <AdSense slot={slot} />
    </div>
  );
}
