import type { Metadata, Viewport } from "next";
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SplashScreen from '@/components/SplashScreen';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { constructMetadata } from '@/lib/utils/metadata';

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const pathname = usePathname();
  // const isHome = pathname ==="/";
  // const [isLoading,setIsLoading]=useState(isHome);

  // useEffect(()=>{
  //   if(isLoading) return;
  // },[isLoading])
  return (
    <html lang="en">
      <body>
        {/* {isLoading && isHome ? (<SplashScreen finishLoading={()=>setIsLoading(false)}/>):( */}
        <>
          <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </>
        {/* )} */}
      </body>
    </html>
  )
}
