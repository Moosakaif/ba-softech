"use client";
import { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Header from "./Components/Navbar";
import Think from "./Components/Think";
import Identity from "./Components/Identity";
import Choose from "./Components/Choose";
import WhyChooseUs from "./Components/WhyChooseUs";
import Client from "./Components/Client";
import Testimonials from "./Components/Testimonials";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";
import WarpIntro from "./Components/WrapIntro";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (showContent) {
      // Add a slight delay before showing content
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }
  }, [showContent]);

  return (
    <div className="relative">
      {!showContent && <WarpIntro onFinish={() => setShowContent(true)} />}
      <div
        className={`transition-all duration-1000 ${
          contentVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <Header />
        <Hero />
        <Think />
        <WhyChooseUs />
        <Identity />
        <Client />
        <Choose />
        <Testimonials />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}