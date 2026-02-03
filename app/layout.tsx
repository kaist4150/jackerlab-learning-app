import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AdSenseScript, AdBannerBottom } from "@/components/ads";
import { GoogleAnalytics, SiteVerification } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Learning - 학습 플랫폼",
    template: "%s | JackerLab Learning",
  },
  description: "프로그래밍, 웹개발, 데이터사이언스 학습 자료와 튜토리얼",
  keywords: ["학습", "프로그래밍", "웹개발", "튜토리얼", "코딩", "교육"],
  authors: [{ name: "JackerLab" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "JackerLab Learning",
    title: "Learning - 학습 플랫폼",
    description: "프로그래밍과 웹개발 학습 자료",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning - 학습 플랫폼",
    description: "프로그래밍과 웹개발 학습 자료",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
        <AdSenseScript />
        <SiteVerification />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <div className="p-4">
            <AdBannerBottom slot="9727264203" />
          </div>
        </div>
      </body>
    </html>
  );
}
