"use client";
import { useState, useEffect, lazy, Suspense } from "react";
import Header from "./Components/Navbar";
import WarpIntro from "./Components/WrapIntro";

const Hero = lazy(() => import("./Components/Hero"));
const Packages = lazy(() => import("./Components/Packages"))
const Think = lazy(() => import("./Components/Think"));
const Identity = lazy(() => import("./Components/Identity"));
const WhyChooseUs = lazy(() => import("./Components/WhyChooseUs"));
const Client = lazy(() => import("./Components/Client"));
const Choose = lazy(() => import("./Components/Choose"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const Connect = lazy(() => import("./Components/Connect"));
const Footer = lazy(() => import("./Components/Footer"));

const EmptyFallback = () => null;

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    think: false,
    whyChooseUs: false,
    identity: false,
    client: false,
    choose: false,
    testimonials: false,
    connect: false,
    footer: false
  });

  // Handle intro completion
  const handleIntroComplete = () => {
    setIntroComplete(true);
    // Make Hero visible immediately after intro
    setVisibleSections(prev => ({ ...prev, hero: true }));
  };

  // Set up intersection observer after intro completes
  useEffect(() => {
    if (!introComplete) return;

    const observerOptions = {
      root: null,
      rootMargin: '100px', // Preload content before it enters viewport
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSections(prev => ({ ...prev, [sectionId]: true }));
          // Once visible, no need to observe anymore
          sectionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all section containers
    const sections = document.querySelectorAll('.observe-section');
    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, [introComplete]);
  
  // Preload Hero component in the background to eliminate delay after intro
  useEffect(() => {
    const preloadHero = async () => {
      try {
        await import("./Components/Hero");
      } catch (err) {
        console.log("Error preloading hero", err);
      }
    };
    preloadHero();
  }, []);

  return (
    <div className="relative">
      {!introComplete ? (
        // Show only the intro animation when it's not complete
        <WarpIntro onFinish={handleIntroComplete} />
      ) : (
        // Show everything after intro completes
        <>
          <Header />
          
          {/* Hero section - load immediately after intro */}
          <div id="hero" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.hero && <Hero />}
            </Suspense>
          </div>
          
          {/* Other sections - load as they come into view */}
          <div id="think" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.think && <Think />}
            </Suspense>
          </div>
          
          <div id="whyChooseUs" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.whyChooseUs && <WhyChooseUs />}
            </Suspense>
          </div>
          
          <div id="identity" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.identity && <Identity />}
            </Suspense>
          </div>

          <div id="identity" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.identity && <Packages />}
            </Suspense>
          </div>
          
          <div id="client" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.client && <Client />}
            </Suspense>
          </div>
          
          <div id="choose" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.choose && <Choose />}
            </Suspense>
          </div>
          
          <div id="testimonials" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.testimonials && <Testimonials />}
            </Suspense>
          </div>
          
          <div id="connect" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.connect && <Connect />}
            </Suspense>
          </div>
          
          <div id="footer" className="observe-section">
            <Suspense fallback={<EmptyFallback />}>
              {visibleSections.footer && <Footer />}
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
}