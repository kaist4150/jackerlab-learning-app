import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
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
    default: "Learning - 기술 학습 플랫폼",
    template: "%s | JackerLab Learning",
  },
  description: "프로그래밍, 웹개발 기술을 단계별 튜토리얼로 학습하세요. JavaScript, Python, React, SQL 등",
  keywords: ["학습", "프로그래밍", "웹개발", "튜토리얼", "코딩", "교육", "JavaScript", "Python", "React"],
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
        <div className="flex min-h-screen">
          <Navigation />
          <main className="flex-1 min-w-0 w-0 p-6 lg:p-8 pt-20 lg:pt-8 bg-gray-50 overflow-x-hidden">
            <div className="max-w-full">
              {children}
              <div className="flex justify-center mt-8">
                <AdBannerBottom slot="9727264203" />
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
