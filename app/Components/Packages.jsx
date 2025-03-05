"use client";

import React, { useState } from "react";
import { font } from "./fonts/font";
import Link from "next/link";

const Packages = () => {
  const [tab, setTab] = useState("Logo Design");

  const packageDetails = {
    "Logo Design": [
      {
        title: "BASIC LOGO PACKAGE",
        price: "$30",
        description: "Ideal for startups and brand revamps.",
        features: ["3 Custom Logo Concepts", "1 Designer", "4 Revisions", "24-48 hours TAT", "100% Unique Design Guarantee"],
      },
      {
        title: "START UP LOGO PACKAGE",
        price: "$60",
        description: "Perfect for growing businesses.",
        features: ["5 Custom Logo Concepts", "2 Designers", "Unlimited Revisions", "48-72 hours TAT", "Final Files in AI, PSD, PNG, PDF"],
      },
      {
        title: "LOGO GROWUP PACKAGE",
        price: "$85",
        description: "For established businesses.",
        features: ["8 Custom Logo Concepts", "3 Designers", "Unlimited Revisions", "Stationary Design", "Free MS Word Letterhead"],
      },
      {
        title: "Website Bravo SPECIAL PACKAGE",
        price: "$175",
        description: "Comprehensive branding solution.",
        features: ["UNLIMITED Logo Design Concepts", "By 5 Award Winning Designers", "Stationary Design (Business Card, Letterhead, Envelope)","Icon Design","UNLIMITED Revisions","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *","48 to 72 hours TAT"],
      },
      {
        title: "BUSINESS LOGO PACKAGE",
        price: "$245",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","UNLIMITED Revisions", " 2 Stationary Design Sets (Business Card, Letterhead, Envelope)","Icon Design","Double Sided Flyer Design / Bi-Fold Brochure","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee"],
      },
      {
        title: "GOLD LOGO PACKAGE",
        price: "$425",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","Icon Design","UNLIMITED Revisions", "2 Stationary Design Sets (Business Card, Letterhead, Envelope)","FREE MS Word Letterhead","Free Email Signature","3 Page Custom Website","2 Stock Photos","2 Banner Designs","jQuery Slider","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *"],
      },
      {
        title: "ILLUSTRATION PACKAGE",
        price: "$349",
        description: "Comprehensive branding solution.",
        features: ["5 unique Illustrations", "Unlimited color Variations", "Unlimited color Variations","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee" , "100% Unique Design Guarantee","100% Money Back Guarantee"],
      },
      {
        title: "MASCOT PACKAGE",
        price: "$499",
        description: "Comprehensive branding solution.",
        features: ["3 Unique mascot Design", "2-3 Combinations", "100% Custom Illustration","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee"],
      },
    ],
    "Website Development": [
      {
        title: "BASIC WEBSITE PACKAGE",
        price: "$199",
        description: "Ideal for small businesses and startups.",
        features: ["2 Stock Images", "3 Pages Website", "1 jQuery Slider Banner", "Contact/Query Form", "Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *"],
      },
      {
        title: "START UP WEBSITE PACKAGE",
        price: "$395",
        description: "Suitable for businesses looking for expansion.",
        features: ["5 Stock Photos", "5 Pages Website", "3 Banner Design", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *" , "Mobile Responsive will be Additional $200*","CMS will be Additional $250*"],
      },
      {
        title: "PROFESSIONAL WEBSITE PACKAGE",
        price: "$844",
        description: "Best for online stores.",
        features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "1 jQuery Slider Banner","FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee", "100% Unique Design Guarantee","100% Money Back Guarantee *","Mobile Responsive will be Additional $200*"],
      },
      {
        title: "ELITE WEBSITE PACKAGE",
        price: "$1399",
        description: "Complete web solution.",
        features: ["Upto 15 Unique Pages Website", "Conceptual and Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)","Custom Forms","Lead Capturing Forms (Optional)","Striking Hover Effects","Newsletter Subscription (Optional)","Newsfeed Integration","Social Media Integration","Search Engine Submission","5 Stock Photos","3 Unique Banner Design","1 jQuery Slider Banner","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *"],
      },
      {
        title: "BUSINESS WEBSITE PACKAGE",
        price: "$2345",
        description: "Complete web solution.",
        features: ["30 Seconds 2D Explainer Video", "Voice - Over & Sound Effects", "Professional Script Writing", "Storyboard", "SEO Meta Tags","Custom Made, Interactive, Dynamic & High End Design","Custom WP (or) Custom PHP Development","1 jQuery Slider Banner","Up to 10 Custom Made Banner Designs","10 Stock Images","Unlimited Revisions","Special Hoover Effects","Content Management System (CMS)","Online Appointment","Online Payment Integration (Optional)","Multi Lingual (Optional)","Custom Dynamic Forms (Optional)","Signup Area (For Newsletters, Offers etc.)","Search Bar","Live Feeds of Social Networks Integration (Optional)","Mobile Responsive","FREE 5 Years Domain Name","Free Google Friendly Sitemap","Search Engine Submission","Complete W3C Certified HTML","Industry Specified Team of Expert Designers and Developers","Complete Deployment","Dedicated Accounts Manager","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *"],
      },
    ],
    "Animations": [
      {
        title: "2D STANDARD LOGO ANIMATION",
        price: "$155",
        description: "Simple logo animations.",
        features: ["3 custom and Unique design", "2 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","3 Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee","100% Money back gurantee"],
      },
      {
        title: "2D ADVANCE LOGO PACKAGE",
        price: "$199",
        description: "Short explainer video for businesses.",
        features: ["3 custom and Unique design", "3 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee","100% Money back gurantee"],
      },
      {
        title: "3D STANDARD LOGO ANIMATION",
        price: "$245",
        description: "Ideal for corporate storytelling.",
        features: ["5 custom and Unique design", "5 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee","100% Money back gurantee"],
      },
      {
        title: "3D ADVANCE ANIMATION",
        price: "$299",
        description: "High-end animation package.",
        features: ["UNLIMITED custom and Unique design", "UNLIMITED Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Music and foley","All source files format Included Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee","100% Money back gurantee"],
      },
    ],
    "E-Commerce": [
      {
        title: " E-COMMERCE STARTUP PACKAGE",
        price: "$794",
        description: "Basic online store setup.",
        features: ["Customized Design", "Up-to 100 Products", "Content Management System (CMS)","Mini Shopping Cart Integration","Payment Module Integration","Easy Product Search","Dedicated designer & developer","Unlimited Revisions","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *"],
      },
      {
        title: "PROFESSIONAL E-COMMERCE PACKAGE",
        price: "$1394",
        description: "For businesses scaling up.",
        features: ["Customized Design", "Up-to 500 Products", "Content Management System (CMS)","Full Shopping Cart Integration","Payment Module Integration","Easy Product Search","Product Reviews","5 Promotional Banners","Team of Expert Designers & Developers","Unlimited Revisions","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *"],
      },
      {
        title: "ELITE E-COMMERCE PACKAGE",
        price: "$2799",
        description: "Full-featured e-commerce solution.",
        features: ["Logo Design", "UNLIMITED Logo Design Concepts", "By 6 Award Winning Designers","Icon Design","UNLIMITED Revisions","Print Media","Stationary Design (BusinessCard,Letterhead & Envelope)","Invoice Design, Email Signature","Bi-Fold Brochure (OR) 2 Sided Flyer Design","Product Catalog Design","Sign age Design (OR) Label Design","T-Shirt Design (OR) Car Wrap Design","Website","E-Commerce Store Design","Product Detail Page Design","Unique Banner Slider","Featured Products Showcase","Full Shopping Cart Integration","Unlimited Products","Unlimited Categories","Product Rating & Reviews","Easy Product Search","Payment Gateway Integration","Multi-currency Support","Content Management System","Customer Log-in Area","Mobile Responsive","Social Media Plugins Integration","Coupon Platform","Tell a Friend Feature","Social Media Pages","Facebook, Twitter, YouTube, Google+ & Pinterest Page Designs","Value Added Services","Dedicated Account Manager","Unlimited Revisions","All Final File Formats","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee","100% Money Back Guarantee *"],
      },
    ],
    "Branding": [
      {
        title: "STARTUP COLLATERAL PACKAGE",
        price: "$99.99",
        description: "Basic branding essentials.",
        features: ["2 Stationery Design Set", "FREE Fax Template", "Print Ready Formats","UNLIMITED Revisions","100% Satisfaction Guarantee","100% Money Back Guarantee *"],
      },
      {
        title: "COLLATERAL CLASSIC PACKAGE",
        price: "$199.99",
        description: "Full branding package for businesses.",
        features: ["2 Stationery Design Set", "UNLIMITED Revisions", "Flyer Design","Brochure Design (Bi-fold/Tri-fold)","100% Satisfaction Guarantee","100% Money Back Guarantee *"],
      },
      {
        title: "PREMIUM COLLATERAL PACKAGE",
        price: "$399.99",
        description: "Complete identity package.",
        features: ["Hat Design", "Invoice Design", "Email Signature Design","2 Stationery Design Set","Packaging Design","UNLIMITED Revisions","T-Shirt Design","T-Shirt Design","100% Money Back Guarantee *"],
      },
    ],
    "SEO": [
      {
        title: "STARTUP PLAN",
        price: "$499",
        description: "Ideal for small websites.",
        features: ["Campaign Setup And Optimization", "Website Audit", "Pages Optimized (10 pages)","10 Selected Keywords Targeting","Keyword Research","Keyword Grouping","Keyword Mapping","On-Page Optimization","SEO Road Map","Blog Creation","Webpage Copywriting (3 pages, 350 words per page)","Title Tag Optimization (10 titles)","Meta Description Optimization (10 meta description)","Meta Keyword Optimization (10 meta keywords)","Domain Redirect Optimization (10 domain redirects)","Xml Sitemap Optimization","Robots.txt Check","URL Rewrites (10 URL rewrites)","Broken Link Report","Rich Snippet Recommendations","Breadcrumbs","Initial Off-Page SEO","Social Bookmarking","Slide Share Marketing","Forums/FAQ's","Link Building","Directory Submission","Local Business Listings"],
      },
      {
        title: "SCALING PLAN",
        price: "$700",
        description: "For ranking growth.",
        features: ["Prior Analysis", "Business Analysis", "Consumer Analysis","Competitor Analysis","15 Selected Keywords Targeting","15 Pages Keyword Targeted","Webpage Optimization","Meta Tags Creation","Keyword Optimization","Image Optimization","Inclusion of anchors","Tracking & Analysis","Google Analytics Installation","Google Webmaster Installation","Call To Action Plan","Creation of Sitemaps","Reporting","Monthly Reporting","Recommendation","Email Support","Phone Support","Off Page Optimization","Social Bookmarking","Slide Share Marketing","Forums/FAQ's","Link Building","Directory Submission","Local Business Listings"],
      },
      {
        title: "VENTUER PLAN",
        price: "$1200",
        description: "Complete SEO strategy.",
        features: ["Prior Analysis", "Business Analysis", "Consumer Analysis","Competitor Analysis","30 Selected Keywords Targeting","30 Pages Keyword Targeted","Webpage Optimization","Meta Tags Creation","Keyword Optimization","Image Optimization","Inclusion of anchors Tags","Inclusion of anchors Indexing Modifications","Tracking & Analysis","Google Places Inclusions","Google Analytics Installation","Google Webmaster Installation","Call To Action Plan","Creation of Sitemaps","Reporting","Monthly Reporting","Recommendation","Email Support","Phone Support","Off Page Optimization","Social Bookmarking","Slide Share Marketing","Forums/FAQ's","Link Building","Directory Submission","Local Business Listings"],
      },
    ],
    "Content Writing": [
      {
        title: "WEB CONTANT PACKAGE",
        price: "$70",
        description: "SEO-optimized blog content.",
        features: ["Some Salient Features of Our Website Copywriting Services are:", "Creative, Well-Written and 100% Original Content", "According To Your Exact Requirements","FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.","SEO friendly - Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","Quick Turnaround Time – Within 3 business days!!","Unlimited Revisions - 100% Satisfaction Guaranteed!","Proofing by our in-house experts – 0% mistakes guarantee!","100% Satisfaction Guarantee","100% Money Back Guarantee*"],
      },
      {
        title: "ARTICLE WRITING PACKAGE",
        price: "$149",
        description: "Professional website content.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Original Content","100% Satisfaction Guarantee","100% Money Back Guarantee*"],
      },
      {
        title: "BLOG WRITING PACKAGE",
        price: "$180",
        description: "Extensive content creation.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Satisfaction Guarantee","100% Money Back Guarantee*" ],
      },
    ],
    "Social Media": [
      {
        title: "STARTUP FIRE PACKAGE",
        price: "$349.99",
        description: "For improving engagement.",
        features: ["3 postings per week (per network) Facebook + Twitter + Instagram + Google+", "Content Creation", "Business Page Optimization","Social Media Strategy (Overview)","Facebook Likes Campaign","Monthly Progress report","Copy Writing"],
      },
      {
        title: "EXELLANCE DREAM PACKAGE",
        price: "$699.99",
        description: "Complete social media management.",
        features: ["Copywriting & Visual designs", "Business Page Optimization", "Ad Campaign Management","Spam monitoring","Monthly Progress report","5 postings per week Facebook + Twitter + Instagram + Google+","Reputation Management","Social Account Setup","Content Creation","Social Media Listening","Query and comments reply"],
      },
      {
        title: "ALL IN ONE SPARK PACKAGE",
        price: "$1199.9",
        description: "Ideal for small businesses.",
        features: ["Initial Brand Analysis", "Consumer Persona Analysis", "Competitor Analysis - Local and Nationwide","Customized Social Media Strategy","Copywriting - Team of 04 Dedicated Social Media Writers","Advertising - Team of 04 Dedicated Social Media Ads Experts","Content Plan Creation","35 Custom Designed Social Media Posts per month","Monthly Google Ads Management - Google Shopping + Google Search Campaigns","Goal Focused Facebook Ad Campaigns","Community Management - All Community Based Social Networks","Page Management (Facebook, Instagram, Linked In, and Twitter)","Page Spam Management - all social media platforms","Engagement Tracking Setup","Facebook Shop Creation","Detailed Page Moderation - All Social Networks","Strategic Ad Campaign Optimization & A/B Testing","Social Media Listening","Monthly Analytics Reporting - KPI Comparison and more","Social Media Listening"],
      },
    ],
  };

  return (
    <section className={`${font.className} flex flex-col text-white justify-center items-center p-12 bg-black z-50`}>
      <h1 className="text-2xl text-center md:text-5xl text-cards font-bold">See Our Packages</h1>
      <div className="flex flex-wrap justify-center gap-4 pt-12 text-lg">
        {Object.keys(packageDetails).map((category) => (
          <button
            key={category}
            onClick={() => setTab(category)}
            className={`px-4 py-2 z-50 rounded-md transition-all duration-300 ${
              tab === category ? "bg-cards text-black font-bold" : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {packageDetails[tab]?.map((pkg, index) => (
          <div key={index} className="p-8 z-50 bg-gray-100 text-black max-h-[38rem] overflow-y-scroll rounded-2xl shadow-lg">
            <h2 className="text-xl font-light">{pkg.title}</h2>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold mt-5 text-xs">Starting from</p>
              <p className="text-3xl text-center  text-yellow-400 font-extrabold">{pkg.price}</p>
              <p className="text-xs text-center mt-4 text-black">Suitable for potential super-startups and brand revamps for companies.</p>
              <Link href="/contact"><button className="text-black mt-6 text-center bg-cards px-6 py-4 rounded-md">Let's Start</button></Link>
              <p className="text-sm pt-5 text-black">{pkg.description}</p>
              <div className="mt-4 max-h-40 overflow-y-auto text-sm space-y-3 text-left text-black list-disc ">
                {pkg.features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;