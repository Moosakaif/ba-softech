'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageTransition from './Components/PageTransition';
import Lenis from 'lenis';
import Script from "next/script";
// import { PreLoaderProvider } from "./Components/PreLoaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [isAnimating, setIsAnimating] = useState(true);
  // const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setIsAnimating(true);
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        duration: 0.8, 
        easing: (t) => t * (2 - t), 
        smoothWheel: true, 
        smoothTouch: true, 
        direction: 'vertical', 
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  const isHomePage = pathname === '/';
  
  // Dynamic page title based on pathname
  const getPageTitle = () => {
    if (isHomePage) return "BA Softech | Home";
    
    // Convert pathname to title format (e.g., '/contact' → 'Contact')
    const pageName = pathname.substring(1); // Remove leading slash
    const formattedPageName = pageName
      ? pageName.charAt(0).toUpperCase() + pageName.slice(1)
      : "";
    
    return `BA Softech | ${formattedPageName}`;
  };

  return (
    <html lang="en">
      <head>
        <title>{getPageTitle()}</title>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-GJPRLT2XWC"
            strategy="afterInteractive"
          />
          <Script id="google-analytics-aw" strategy="afterInteractive">
            {`
               window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-GJPRLT2XWC');
            `}
          </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="UaRMkghVNJyQGe04TbxWq2ZwHz8YwusRB-A7uaik9k8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* <PreLoaderProvider> */}
          <AnimatePresence exitBeforeEnter>
            {isAnimating && !isHomePage && (
              <PageTransition key={pathname} onAnimationComplete={() => setIsAnimating(false)} />
            )}
            <div
              style={{
                position: isHomePage ? 'relative' : 'initial',
                zIndex: isHomePage ? 'auto' : 10,
              }}
              id="main-container"
              className="overflow-hidden"
            >
              {children}
            </div>
          </AnimatePresence>
        {/* </PreLoaderProvider> */}
      </body>
    </html>
  );
}