'use client'
import type { Metadata } from 'next';
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SplashScreen from '@/components/SplashScreen';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'TCDD Bilet Bul',
  description: 'TCDD bilet bulmanıza yardımcı araç',
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["tcdd", "yht", "tren", "tcdd bilet", "thy bilet","bilet bul","thy bilet bul","türkiye cumhuriyeti devlet demiryolları"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Berke Düzgün" },
    {
      name: "Berke Düzgün",
      url: "https://www.linkedin.com/in/berkeduzgun/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon128x128.png" },
    { rel: "icon", url: "/icon.png" },
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isHome = pathname ==="/";
  const [isLoading,setIsLoading]=useState(isHome);

  useEffect(()=>{
    if(isLoading) return;
  },[isLoading])
  return (
    <html lang="en">
      <body>
        {isLoading && isHome ? (<SplashScreen/>):(
        <>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </>
        )}
      </body>
    </html>
  )
}
