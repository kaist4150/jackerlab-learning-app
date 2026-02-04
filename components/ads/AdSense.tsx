'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSenseProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function AdSense({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  style = { display: 'block' },
}: AdSenseProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div
      className={`ad-container overflow-hidden max-w-full ${className}`}
      style={{ contain: 'layout inline-size' }}
    >
      <ins
        className="adsbygoogle"
        style={{ ...style, display: 'block', maxWidth: '100%', width: '100%' }}
        data-ad-client="ca-pub-4828862970866548"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
}
