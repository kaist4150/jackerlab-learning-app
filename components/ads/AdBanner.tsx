'use client';

import AdSense from './AdSense';

interface AdBannerProps {
  slot: string;
  className?: string;
}

// 상단/하단 배너 광고
export function AdBannerTop({ slot, className = '' }: AdBannerProps) {
  return (
    <div className={`w-full py-2 ${className}`}>
      <AdSense slot={slot} format="horizontal" />
    </div>
  );
}

export function AdBannerBottom({ slot, className = '' }: AdBannerProps) {
  return (
    <div className={`w-full py-2 ${className}`}>
      <AdSense slot={slot} format="horizontal" />
    </div>
  );
}

// 사이드바 광고
export function AdSidebar({ slot, className = '' }: AdBannerProps) {
  return (
    <div className={`w-full ${className}`}>
      <AdSense slot={slot} format="vertical" />
    </div>
  );
}

// 인피드 광고 (목록 사이)
export function AdInFeed({ slot, className = '' }: AdBannerProps) {
  return (
    <div className={`w-full py-4 ${className}`}>
      <AdSense slot={slot} format="rectangle" />
    </div>
  );
}

// 콘텐츠 내 광고
export function AdInArticle({ slot, className = '' }: AdBannerProps) {
  return (
    <div className={`w-full py-4 ${className}`}>
      <AdSense slot={slot} format="auto" />
    </div>
  );
}
