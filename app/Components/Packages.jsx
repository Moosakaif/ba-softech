"use client";

import React, { useState } from "react";
import { font } from "./fonts/font";
import Link from "next/link";

const Packages = () => {
  const [tab, setTab] = useState("Logo Design");
  const [region, setRegion] = useState("USA");

  const changeRegion = () => {
    setRegion("Pakistan")
  }
  const changeRegionAus = () => {
    setRegion("Australia")
  }
  const changeRegionUK = () => {
    setRegion("UK")
  }
  const changeRegionUAE = () => {
    setRegion("UAE")
  }
  const changeBackRegion = () => {
    setRegion("USA")
  }

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
        title: "BA SPECIAL PACKAGE",
        price: "$175",
        description: "Comprehensive branding solution.",
        features: ["UNLIMITED Logo Design Concepts", "By 5 Award Winning Designers", "Stationary Design (Business Card, Letterhead, Envelope)","Icon Design","UNLIMITED Revisions","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Satisfaction Guarantee","100% Unique Design Guarantee","48 to 72 hours TAT"],
      },
      {
        title: "BUSINESS LOGO PACKAGE",
        price: "$245",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","UNLIMITED Revisions", " 2 Stationary Design Sets (Business Card, Letterhead, Envelope)","Icon Design","Double Sided Flyer Design / Bi-Fold Brochure","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "GOLD LOGO PACKAGE",
        price: "$425",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","Icon Design","UNLIMITED Revisions", "2 Stationary Design Sets (Business Card, Letterhead, Envelope)","FREE MS Word Letterhead","Free Email Signature","3 Page Custom Website","2 Stock Photos","2 Banner Designs","jQuery Slider","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "ILLUSTRATION PACKAGE",
        price: "$349",
        description: "Comprehensive branding solution.",
        features: ["5 unique Illustrations", "Unlimited color Variations", "Unlimited color Variations","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee" , "100% Unique Design Guarantee"],
      },
      {
        title: "MASCOT PACKAGE",
        price: "$499",
        description: "Comprehensive branding solution.",
        features: ["3 Unique mascot Design", "2-3 Combinations", "100% Custom Illustration","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Website Development": [
      {
        title: "BASIC WEBSITE PACKAGE",
        price: "$199",
        description: "Ideal for small businesses and startups.",
        features: ["2 Stock Images", "3 Pages Website", "1 jQuery Slider Banner", "Contact/Query Form", "Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "START UP WEBSITE PACKAGE",
        price: "$395",
        description: "Suitable for businesses looking for expansion.",
        features: ["5 Stock Photos", "5 Pages Website", "3 Banner Design", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","100% Satisfaction Guarantee","100% Unique Design Guarantee" , "Mobile Responsive will be Additional $200*","CMS will be Additional $250*"],
      },
      {
        title: "PROFESSIONAL WEBSITE PACKAGE",
        price: "$844",
        description: "Best for online stores.",
        features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "1 jQuery Slider Banner","FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee", "100% Unique Design Guarantee","Mobile Responsive will be Additional $200*"],
      },
      {
        title: "ELITE WEBSITE PACKAGE",
        price: "$1399",
        description: "Complete web solution.",
        features: ["Upto 15 Unique Pages Website", "Conceptual and Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)","Custom Forms","Lead Capturing Forms (Optional)","Striking Hover Effects","Newsletter Subscription (Optional)","Newsfeed Integration","Social Media Integration","Search Engine Submission","5 Stock Photos","3 Unique Banner Design","1 jQuery Slider Banner","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "BUSINESS WEBSITE PACKAGE",
        price: "$2345",
        description: "Complete web solution.",
        features: ["30 Seconds 2D Explainer Video", "Voice - Over & Sound Effects", "Professional Script Writing", "Storyboard", "SEO Meta Tags","Custom Made, Interactive, Dynamic & High End Design","Custom WP (or) Custom PHP Development","1 jQuery Slider Banner","Up to 10 Custom Made Banner Designs","10 Stock Images","Unlimited Revisions","Special Hoover Effects","Content Management System (CMS)","Online Appointment","Online Payment Integration (Optional)","Multi Lingual (Optional)","Custom Dynamic Forms (Optional)","Signup Area (For Newsletters, Offers etc.)","Search Bar","Live Feeds of Social Networks Integration (Optional)","Mobile Responsive","FREE 5 Years Domain Name","Free Google Friendly Sitemap","Search Engine Submission","Complete W3C Certified HTML","Industry Specified Team of Expert Designers and Developers","Complete Deployment","Dedicated Accounts Manager","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Animations": [
      {
        title: "2D STANDARD LOGO ANIMATION",
        price: "$155",
        description: "Simple logo animations.",
        features: ["3 custom and Unique design", "2 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","3 Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "2D ADVANCE LOGO PACKAGE",
        price: "$199",
        description: "Short explainer video for businesses.",
        features: ["3 custom and Unique design", "3 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D STANDARD LOGO ANIMATION",
        price: "$245",
        description: "Ideal for corporate storytelling.",
        features: ["5 custom and Unique design", "5 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D ADVANCE ANIMATION",
        price: "$299",
        description: "High-end animation package.",
        features: ["UNLIMITED custom and Unique design", "UNLIMITED Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Music and foley","All source files format Included Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
    ],
    "Branding": [
      {
        title: "STARTUP COLLATERAL PACKAGE",
        price: "$99.99",
        description: "Basic branding essentials.",
        features: ["2 Stationery Design Set", "FREE Fax Template", "Print Ready Formats","UNLIMITED Revisions","100% Satisfaction Guarantee"],
      },
      {
        title: "COLLATERAL CLASSIC PACKAGE",
        price: "$199.99",
        description: "Full branding package for businesses.",
        features: ["2 Stationery Design Set", "UNLIMITED Revisions", "Flyer Design","Brochure Design (Bi-fold/Tri-fold)","100% Satisfaction Guarantee"],
      },
      {
        title: "PREMIUM COLLATERAL PACKAGE",
        price: "$399.99",
        description: "Complete identity package.",
        features: ["Hat Design", "Invoice Design", "Email Signature Design","2 Stationery Design Set","Packaging Design","UNLIMITED Revisions","T-Shirt Design","T-Shirt Design"],
      },
    ],
    "Content Writing": [
      {
        title: "WEB CONTENT PACKAGE",
        price: "$200",
        description: "SEO-optimized blog content.",
        features: ["Some Salient Features of Our Website Copywriting Services are:", "Creative, Well-Written and 100% Original Content", "According To Your Exact Requirements","FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.","SEO friendly - Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","Quick Turnaround Time – Within 3 business days!!","Unlimited Revisions - 100% Satisfaction Guaranteed!","Proofing by our in-house experts – 0% mistakes guarantee!","100% Satisfaction Guarantee"],
      },
      {
        title: "ARTICLE WRITING PACKAGE",
        price: "$1499",
        description: "Professional website content.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Original Content","100% Satisfaction Guarantee"],
      },
      {
        title: "BLOG WRITING PACKAGE",
        price: "$2000",
        description: "Extensive content creation.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Satisfaction Guarantee", "Editing", "Publishing", "Designing" ],
      },
    ],
    "Social Media": [
      {
        title: "STARTUP FIRE PACKAGE",
        price: "$320",
        description: "For improving engagement.",
        features: ["3 postings per week (per network) Facebook + Twitter + Instagram + Google+", "Content Creation", "Business Page Optimization","Social Media Strategy (Overview)","Facebook Likes Campaign","Monthly Progress report"],
      },
      {
        title: "EXELLANCE DREAM PACKAGE",
        price: "$600",
        description: "Complete social media management.",
        features: ["Copywriting & Visual designs", "Business Page Optimization", "Ad Campaign Management","Spam monitoring","Monthly Progress report","5 postings per week Facebook + Twitter + Instagram + Google+","Reputation Management","Social Account Setup","Content Creation","Social Media Listening","Query and comments reply"],
      },
      {
        title: "ALL IN ONE SPARK PACKAGE",
        price: "$1000",
        description: "Ideal for small businesses.",
        features: ["Initial Brand Analysis", "Consumer Persona Analysis", "Competitor Analysis - Local and Nationwide","Customized Social Media Strategy","Copywriting - Team of 04 Dedicated Social Media Writers","Advertising - Team of 04 Dedicated Social Media Ads Experts","Content Plan Creation","35 Custom Designed Social Media Posts per month","Monthly Google Ads Management - Google Shopping + Google Search Campaigns","Goal Focused Facebook Ad Campaigns","Community Management - All Community Based Social Networks","Page Management (Facebook, Instagram, Linked In, and Twitter)","Page Spam Management - all social media platforms","Engagement Tracking Setup","Facebook Shop Creation","Detailed Page Moderation - All Social Networks","Strategic Ad Campaign Optimization & A/B Testing","Social Media Listening","Monthly Analytics Reporting - KPI Comparison and more","Social Media Listening"],
      },
    ],
  };

  const packageDetailsPkr = {
    "Logo Design": [
      {
        title: "BASIC LOGO PACKAGE",
        price: "Rs. 5,499",
        description: "Ideal for startups and brand revamps.",
        features: ["3 Custom Logo Concepts", "1 Designer", "4 Revisions", "24-48 hours TAT", "100% Unique Design Guarantee"],
      },
      {
        title: "START UP LOGO PACKAGE",
        price: "Rs. 7,499",
        description: "Perfect for growing businesses.",
        features: ["5 Custom Logo Concepts", "2 Designers", "Unlimited Revisions", "48-72 hours TAT", "Final Files in AI, PSD, PNG, PDF"],
      },
      {
        title: "LOGO GROWUP PACKAGE",
        price: "Rs. 9,999",
        description: "For established businesses.",
        features: ["8 Custom Logo Concepts", "3 Designers", "Unlimited Revisions", "Stationary Design", "Free MS Word Letterhead"],
      },
      {
        title: "BA SPECIAL PACKAGE",
        price: "Rs. 14,999",
        description: "Comprehensive branding solution.",
        features: ["UNLIMITED Logo Design Concepts", "By 5 Award Winning Designers", "Stationary Design (Business Card, Letterhead, Envelope)","Icon Design","UNLIMITED Revisions","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Satisfaction Guarantee","100% Unique Design Guarantee","48 to 72 hours TAT"],
      },
      {
        title: "BUSINESS LOGO PACKAGE",
        price: "Rs. 19,999",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","UNLIMITED Revisions", " 2 Stationary Design Sets (Business Card, Letterhead, Envelope)","Icon Design","Double Sided Flyer Design / Bi-Fold Brochure","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "GOLD LOGO PACKAGE",
        price: "Rs. 22,999",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","Icon Design","UNLIMITED Revisions", "2 Stationary Design Sets (Business Card, Letterhead, Envelope)","FREE MS Word Letterhead","Free Email Signature","3 Page Custom Website","2 Stock Photos","2 Banner Designs","jQuery Slider","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "ILLUSTRATION PACKAGE",
        price: "Rs. 26,999",
        description: "Comprehensive branding solution.",
        features: ["5 unique Illustrations", "Unlimited color Variations", "Unlimited color Variations","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee" , "100% Unique Design Guarantee"],
      },
      {
        title: "MASCOT PACKAGE",
        price: "Rs. 29,999",
        description: "Comprehensive branding solution.",
        features: ["3 Unique mascot Design", "2-3 Combinations", "100% Custom Illustration","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Website Development": [
      {
        title: "BASIC WEBSITE PACKAGE",
        price: "Rs. 34,999",
        description: "Ideal for small businesses and startups.",
        features: ["2 Stock Images", "3 Pages Website", "1 jQuery Slider Banner", "Contact/Query Form", "Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "START UP WEBSITE PACKAGE",
        price: "Rs. 54,999",
        description: "Suitable for businesses looking for expansion.",
        features: ["5 Stock Photos", "5 Pages Website", "3 Banner Design", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","100% Satisfaction Guarantee","100% Unique Design Guarantee" , "Mobile Responsive will be Additional $200*","CMS will be Additional $250*"],
      },
      {
        title: "PROFESSIONAL WEBSITE PACKAGE",
        price: "Rs. 65,000",
        description: "Best for online stores.",
        features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "1 jQuery Slider Banner","FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee", "100% Unique Design Guarantee","Mobile Responsive will be Additional $200*"],
      },
      {
        title: "ELITE WEBSITE PACKAGE",
        price: "Rs. 74,500",
        description: "Complete web solution.",
        features: ["Upto 15 Unique Pages Website", "Conceptual and Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)","Custom Forms","Lead Capturing Forms (Optional)","Striking Hover Effects","Newsletter Subscription (Optional)","Newsfeed Integration","Social Media Integration","Search Engine Submission","5 Stock Photos","3 Unique Banner Design","1 jQuery Slider Banner","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "BUSINESS WEBSITE PACKAGE",
        price: "Rs. 79,500",
        description: "Complete web solution.",
        features: ["30 Seconds 2D Explainer Video", "Voice - Over & Sound Effects", "Professional Script Writing", "Storyboard", "SEO Meta Tags","Custom Made, Interactive, Dynamic & High End Design","Custom WP (or) Custom PHP Development","1 jQuery Slider Banner","Up to 10 Custom Made Banner Designs","10 Stock Images","Unlimited Revisions","Special Hoover Effects","Content Management System (CMS)","Online Appointment","Online Payment Integration (Optional)","Multi Lingual (Optional)","Custom Dynamic Forms (Optional)","Signup Area (For Newsletters, Offers etc.)","Search Bar","Live Feeds of Social Networks Integration (Optional)","Mobile Responsive","FREE 5 Years Domain Name","Free Google Friendly Sitemap","Search Engine Submission","Complete W3C Certified HTML","Industry Specified Team of Expert Designers and Developers","Complete Deployment","Dedicated Accounts Manager","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Animations": [
      {
        title: "2D STANDARD LOGO ANIMATION",
        price: "Rs. 9,500",
        description: "Simple logo animations.",
        features: ["3 custom and Unique design", "2 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","3 Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "2D ADVANCE LOGO PACKAGE",
        price: "Rs. 13,000",
        description: "Short explainer video for businesses.",
        features: ["3 custom and Unique design", "3 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D STANDARD LOGO ANIMATION",
        price: "Rs. 17,500",
        description: "Ideal for corporate storytelling.",
        features: ["5 custom and Unique design", "5 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D ADVANCE ANIMATION",
        price: "Rs. 19,500",
        description: "High-end animation package.",
        features: ["UNLIMITED custom and Unique design", "UNLIMITED Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Music and foley","All source files format Included Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
    ],
    "Branding": [
      {
        title: "STARTUP COLLATERAL PACKAGE",
        price: "Rs. 15,000",
        description: "Basic branding essentials.",
        features: ["2 Stationery Design Set", "FREE Fax Template", "Print Ready Formats","UNLIMITED Revisions","100% Satisfaction Guarantee"],
      },
      {
        title: "COLLATERAL CLASSIC PACKAGE",
        price: "Rs. 18,000",
        description: "Full branding package for businesses.",
        features: ["2 Stationery Design Set", "UNLIMITED Revisions", "Flyer Design","Brochure Design (Bi-fold/Tri-fold)","100% Satisfaction Guarantee"],
      },
      {
        title: "PREMIUM COLLATERAL PACKAGE",
        price: "Rs. 25,500",
        description: "Complete identity package.",
        features: ["Hat Design", "Invoice Design", "Email Signature Design","2 Stationery Design Set","Packaging Design","UNLIMITED Revisions","T-Shirt Design","T-Shirt Design"],
      },
    ],
    "Content Writing": [
      {
        title: "WEB CONTENT PACKAGE",
        price: "Rs. 12,500",
        description: "SEO-optimized blog content.",
        features: ["Some Salient Features of Our Website Copywriting Services are:", "Creative, Well-Written and 100% Original Content", "According To Your Exact Requirements","FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.","SEO friendly - Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","Quick Turnaround Time – Within 3 business days!!","Unlimited Revisions - 100% Satisfaction Guaranteed!","Proofing by our in-house experts – 0% mistakes guarantee!","100% Satisfaction Guarantee"],
      },
      {
        title: "ARTICLE WRITING PACKAGE",
        price: "Rs. 17,500",
        description: "Professional website content.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Original Content","100% Satisfaction Guarantee"],
      },
      {
        title: "BLOG WRITING PACKAGE",
        price: "Rs. 23,000",
        description: "Extensive content creation.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Satisfaction Guarantee", "Editing", "Publishing", "Designing" ],
      },
    ],
    "Social Media": [
      {
        title: "STARTUP FIRE PACKAGE",
        price: "Rs. 89,600",
        description: "For improving engagement.",
        features: ["3 postings per week (per network) Facebook + Twitter + Instagram + Google+", "Content Creation", "Business Page Optimization","Social Media Strategy (Overview)","Facebook Likes Campaign","Monthly Progress report"],
      },
      {
        title: "EXELLANCE DREAM PACKAGE",
        price: "Rs. 168,000",
        description: "Complete social media management.",
        features: ["Copywriting & Visual designs", "Business Page Optimization", "Ad Campaign Management","Spam monitoring","Monthly Progress report","5 postings per week Facebook + Twitter + Instagram + Google+","Reputation Management","Social Account Setup","Content Creation","Social Media Listening","Query and comments reply"],
      },
      {
        title: "ALL IN ONE SPARK PACKAGE",
        price: "Rs. 280,000",
        description: "Ideal for small businesses.",
        features: ["Initial Brand Analysis", "Consumer Persona Analysis", "Competitor Analysis - Local and Nationwide","Customized Social Media Strategy","Copywriting - Team of 04 Dedicated Social Media Writers","Advertising - Team of 04 Dedicated Social Media Ads Experts","Content Plan Creation","35 Custom Designed Social Media Posts per month","Monthly Google Ads Management - Google Shopping + Google Search Campaigns","Goal Focused Facebook Ad Campaigns","Community Management - All Community Based Social Networks","Page Management (Facebook, Instagram, Linked In, and Twitter)","Page Spam Management - all social media platforms","Engagement Tracking Setup","Facebook Shop Creation","Detailed Page Moderation - All Social Networks","Strategic Ad Campaign Optimization & A/B Testing","Social Media Listening","Monthly Analytics Reporting - KPI Comparison and more","Social Media Listening"],
      },
    ],
  };
  const packageDetailsAus = {
    "Logo Design": [
      {
        title: "BASIC LOGO PACKAGE",
        price: "$45",
        description: "Ideal for startups and brand revamps.",
        features: ["3 Custom Logo Concepts", "1 Designer", "4 Revisions", "24-48 hours TAT", "100% Unique Design Guarantee"],
      },
      {
        title: "START UP LOGO PACKAGE",
        price: "$70",
        description: "Perfect for growing businesses.",
        features: ["5 Custom Logo Concepts", "2 Designers", "Unlimited Revisions", "48-72 hours TAT", "Final Files in AI, PSD, PNG, PDF"],
      },
      {
        title: "LOGO GROWUP PACKAGE",
        price: "$90",
        description: "For established businesses.",
        features: ["8 Custom Logo Concepts", "3 Designers", "Unlimited Revisions", "Stationary Design", "Free MS Word Letterhead"],
      },
      {
        title: "BA SPECIAL PACKAGE",
        price: "$185",
        description: "Comprehensive branding solution.",
        features: ["UNLIMITED Logo Design Concepts", "By 5 Award Winning Designers", "Stationary Design (Business Card, Letterhead, Envelope)","Icon Design","UNLIMITED Revisions","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Satisfaction Guarantee","100% Unique Design Guarantee","48 to 72 hours TAT"],
      },
      {
        title: "BUSINESS LOGO PACKAGE",
        price: "$250",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","UNLIMITED Revisions", " 2 Stationary Design Sets (Business Card, Letterhead, Envelope)","Icon Design","Double Sided Flyer Design / Bi-Fold Brochure","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "GOLD LOGO PACKAGE",
        price: "$450",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","Icon Design","UNLIMITED Revisions", "2 Stationary Design Sets (Business Card, Letterhead, Envelope)","FREE MS Word Letterhead","Free Email Signature","3 Page Custom Website","2 Stock Photos","2 Banner Designs","jQuery Slider","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "ILLUSTRATION PACKAGE",
        price: "$359",
        description: "Comprehensive branding solution.",
        features: ["5 unique Illustrations", "Unlimited color Variations", "Unlimited color Variations","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee" , "100% Unique Design Guarantee"],
      },
      {
        title: "MASCOT PACKAGE",
        price: "$599",
        description: "Comprehensive branding solution.",
        features: ["3 Unique mascot Design", "2-3 Combinations", "100% Custom Illustration","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Website Development": [
      {
        title: "BASIC WEBSITE PACKAGE",
        price: "$210",
        description: "Ideal for small businesses and startups.",
        features: ["2 Stock Images", "3 Pages Website", "1 jQuery Slider Banner", "Contact/Query Form", "Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "START UP WEBSITE PACKAGE",
        price: "$400",
        description: "Suitable for businesses looking for expansion.",
        features: ["5 Stock Photos", "5 Pages Website", "3 Banner Design", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","100% Satisfaction Guarantee","100% Unique Design Guarantee" , "Mobile Responsive will be Additional $200*","CMS will be Additional $250*"],
      },
      {
        title: "PROFESSIONAL WEBSITE PACKAGE",
        price: "$850",
        description: "Best for online stores.",
        features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "1 jQuery Slider Banner","FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee", "100% Unique Design Guarantee","Mobile Responsive will be Additional $200*"],
      },
      {
        title: "ELITE WEBSITE PACKAGE",
        price: "$1410",
        description: "Complete web solution.",
        features: ["Upto 15 Unique Pages Website", "Conceptual and Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)","Custom Forms","Lead Capturing Forms (Optional)","Striking Hover Effects","Newsletter Subscription (Optional)","Newsfeed Integration","Social Media Integration","Search Engine Submission","5 Stock Photos","3 Unique Banner Design","1 jQuery Slider Banner","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "BUSINESS WEBSITE PACKAGE",
        price: "$2390",
        description: "Complete web solution.",
        features: ["30 Seconds 2D Explainer Video", "Voice - Over & Sound Effects", "Professional Script Writing", "Storyboard", "SEO Meta Tags","Custom Made, Interactive, Dynamic & High End Design","Custom WP (or) Custom PHP Development","1 jQuery Slider Banner","Up to 10 Custom Made Banner Designs","10 Stock Images","Unlimited Revisions","Special Hoover Effects","Content Management System (CMS)","Online Appointment","Online Payment Integration (Optional)","Multi Lingual (Optional)","Custom Dynamic Forms (Optional)","Signup Area (For Newsletters, Offers etc.)","Search Bar","Live Feeds of Social Networks Integration (Optional)","Mobile Responsive","FREE 5 Years Domain Name","Free Google Friendly Sitemap","Search Engine Submission","Complete W3C Certified HTML","Industry Specified Team of Expert Designers and Developers","Complete Deployment","Dedicated Accounts Manager","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Animations": [
      {
        title: "2D STANDARD LOGO ANIMATION",
        price: "$160",
        description: "Simple logo animations.",
        features: ["3 custom and Unique design", "2 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","3 Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "2D ADVANCE LOGO PACKAGE",
        price: "$210",
        description: "Short explainer video for businesses.",
        features: ["3 custom and Unique design", "3 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D STANDARD LOGO ANIMATION",
        price: "$260",
        description: "Ideal for corporate storytelling.",
        features: ["5 custom and Unique design", "5 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D ADVANCE ANIMATION",
        price: "$325",
        description: "High-end animation package.",
        features: ["UNLIMITED custom and Unique design", "UNLIMITED Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Music and foley","All source files format Included Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
    ],
    "Branding": [
      {
        title: "STARTUP COLLATERAL PACKAGE",
        price: "$109.99",
        description: "Basic branding essentials.",
        features: ["2 Stationery Design Set", "FREE Fax Template", "Print Ready Formats","UNLIMITED Revisions","100% Satisfaction Guarantee"],
      },
      {
        title: "COLLATERAL CLASSIC PACKAGE",
        price: "$209.99",
        description: "Full branding package for businesses.",
        features: ["2 Stationery Design Set", "UNLIMITED Revisions", "Flyer Design","Brochure Design (Bi-fold/Tri-fold)","100% Satisfaction Guarantee"],
      },
      {
        title: "PREMIUM COLLATERAL PACKAGE",
        price: "$409.99",
        description: "Complete identity package.",
        features: ["Hat Design", "Invoice Design", "Email Signature Design","2 Stationery Design Set","Packaging Design","UNLIMITED Revisions","T-Shirt Design","T-Shirt Design"],
      },
    ],
    "Content Writing": [
      {
        title: "WEB CONTENT PACKAGE",
        price: "$250",
        description: "SEO-optimized blog content.",
        features: ["Some Salient Features of Our Website Copywriting Services are:", "Creative, Well-Written and 100% Original Content", "According To Your Exact Requirements","FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.","SEO friendly - Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","Quick Turnaround Time – Within 3 business days!!","Unlimited Revisions - 100% Satisfaction Guaranteed!","Proofing by our in-house experts – 0% mistakes guarantee!","100% Satisfaction Guarantee"],
      },
      {
        title: "ARTICLE WRITING PACKAGE",
        price: "$1599",
        description: "Professional website content.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Original Content","100% Satisfaction Guarantee"],
      },
      {
        title: "BLOG WRITING PACKAGE",
        price: "$2100",
        description: "Extensive content creation.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Satisfaction Guarantee", "Editing", "Publishing", "Designing" ],
      },
    ],
    "Social Media": [
      {
        title: "STARTUP FIRE PACKAGE",
        price: "$399",
        description: "For improving engagement.",
        features: ["3 postings per week (per network) Facebook + Twitter + Instagram + Google+", "Content Creation", "Business Page Optimization","Social Media Strategy (Overview)","Facebook Likes Campaign","Monthly Progress report"],
      },
      {
        title: "EXELLANCE DREAM PACKAGE",
        price: "$699",
        description: "Complete social media management.",
        features: ["Copywriting & Visual designs", "Business Page Optimization", "Ad Campaign Management","Spam monitoring","Monthly Progress report","5 postings per week Facebook + Twitter + Instagram + Google+","Reputation Management","Social Account Setup","Content Creation","Social Media Listening","Query and comments reply"],
      },
      {
        title: "ALL IN ONE SPARK PACKAGE",
        price: "$1100",
        description: "Ideal for small businesses.",
        features: ["Initial Brand Analysis", "Consumer Persona Analysis", "Competitor Analysis - Local and Nationwide","Customized Social Media Strategy","Copywriting - Team of 04 Dedicated Social Media Writers","Advertising - Team of 04 Dedicated Social Media Ads Experts","Content Plan Creation","35 Custom Designed Social Media Posts per month","Monthly Google Ads Management - Google Shopping + Google Search Campaigns","Goal Focused Facebook Ad Campaigns","Community Management - All Community Based Social Networks","Page Management (Facebook, Instagram, Linked In, and Twitter)","Page Spam Management - all social media platforms","Engagement Tracking Setup","Facebook Shop Creation","Detailed Page Moderation - All Social Networks","Strategic Ad Campaign Optimization & A/B Testing","Social Media Listening","Monthly Analytics Reporting - KPI Comparison and more","Social Media Listening"],
      },
    ],
  };
  const packageDetailsUK = {
    "Logo Design": [
      {
        title: "BASIC LOGO PACKAGE",
        price: "£21",
        description: "Ideal for startups and brand revamps.",
        features: ["3 Custom Logo Concepts", "1 Designer", "4 Revisions", "24-48 hours TAT", "100% Unique Design Guarantee"],
      },
      {
        title: "START UP LOGO PACKAGE",
        price: "£35",
        description: "Perfect for growing businesses.",
        features: ["5 Custom Logo Concepts", "2 Designers", "Unlimited Revisions", "48-72 hours TAT", "Final Files in AI, PSD, PNG, PDF"],
      },
      {
        title: "LOGO GROWUP PACKAGE",
        price: "£45",
        description: "For established businesses.",
        features: ["8 Custom Logo Concepts", "3 Designers", "Unlimited Revisions", "Stationary Design", "Free MS Word Letterhead"],
      },
      {
        title: "BA SPECIAL PACKAGE",
        price: "£90",
        description: "Comprehensive branding solution.",
        features: ["UNLIMITED Logo Design Concepts", "By 5 Award Winning Designers", "Stationary Design (Business Card, Letterhead, Envelope)","Icon Design","UNLIMITED Revisions","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Satisfaction Guarantee","100% Unique Design Guarantee","48 to 72 hours TAT"],
      },
      {
        title: "BUSINESS LOGO PACKAGE",
        price: "£125",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","UNLIMITED Revisions", " 2 Stationary Design Sets (Business Card, Letterhead, Envelope)","Icon Design","Double Sided Flyer Design / Bi-Fold Brochure","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "GOLD LOGO PACKAGE",
        price: "£220",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","Icon Design","UNLIMITED Revisions", "2 Stationary Design Sets (Business Card, Letterhead, Envelope)","FREE MS Word Letterhead","Free Email Signature","3 Page Custom Website","2 Stock Photos","2 Banner Designs","jQuery Slider","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "ILLUSTRATION PACKAGE",
        price: "£175",
        description: "Comprehensive branding solution.",
        features: ["5 unique Illustrations", "Unlimited color Variations", "Unlimited color Variations","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee" , "100% Unique Design Guarantee"],
      },
      {
        title: "MASCOT PACKAGE",
        price: "£290",
        description: "Comprehensive branding solution.",
        features: ["3 Unique mascot Design", "2-3 Combinations", "100% Custom Illustration","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Website Development": [
      {
        title: "BASIC WEBSITE PACKAGE",
        price: "£105",
        description: "Ideal for small businesses and startups.",
        features: ["2 Stock Images", "3 Pages Website", "1 jQuery Slider Banner", "Contact/Query Form", "Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "START UP WEBSITE PACKAGE",
        price: "£195",
        description: "Suitable for businesses looking for expansion.",
        features: ["5 Stock Photos", "5 Pages Website", "3 Banner Design", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","100% Satisfaction Guarantee","100% Unique Design Guarantee" , "Mobile Responsive will be Additional $200*","CMS will be Additional $250*"],
      },
      {
        title: "PROFESSIONAL WEBSITE PACKAGE",
        price: "£415",
        description: "Best for online stores.",
        features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "1 jQuery Slider Banner","FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee", "100% Unique Design Guarantee","Mobile Responsive will be Additional $200*"],
      },
      {
        title: "ELITE WEBSITE PACKAGE",
        price: "£685",
        description: "Complete web solution.",
        features: ["Upto 15 Unique Pages Website", "Conceptual and Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)","Custom Forms","Lead Capturing Forms (Optional)","Striking Hover Effects","Newsletter Subscription (Optional)","Newsfeed Integration","Social Media Integration","Search Engine Submission","5 Stock Photos","3 Unique Banner Design","1 jQuery Slider Banner","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "BUSINESS WEBSITE PACKAGE",
        price: "£1100",
        description: "Complete web solution.",
        features: ["30 Seconds 2D Explainer Video", "Voice - Over & Sound Effects", "Professional Script Writing", "Storyboard", "SEO Meta Tags","Custom Made, Interactive, Dynamic & High End Design","Custom WP (or) Custom PHP Development","1 jQuery Slider Banner","Up to 10 Custom Made Banner Designs","10 Stock Images","Unlimited Revisions","Special Hoover Effects","Content Management System (CMS)","Online Appointment","Online Payment Integration (Optional)","Multi Lingual (Optional)","Custom Dynamic Forms (Optional)","Signup Area (For Newsletters, Offers etc.)","Search Bar","Live Feeds of Social Networks Integration (Optional)","Mobile Responsive","FREE 5 Years Domain Name","Free Google Friendly Sitemap","Search Engine Submission","Complete W3C Certified HTML","Industry Specified Team of Expert Designers and Developers","Complete Deployment","Dedicated Accounts Manager","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Animations": [
      {
        title: "2D STANDARD LOGO ANIMATION",
        price: "£78",
        description: "Simple logo animations.",
        features: ["3 custom and Unique design", "2 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","3 Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "2D ADVANCE LOGO PACKAGE",
        price: "£150",
        description: "Short explainer video for businesses.",
        features: ["3 custom and Unique design", "3 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D STANDARD LOGO ANIMATION",
        price: "£200",
        description: "Ideal for corporate storytelling.",
        features: ["5 custom and Unique design", "5 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D ADVANCE ANIMATION",
        price: "£250",
        description: "High-end animation package.",
        features: ["UNLIMITED custom and Unique design", "UNLIMITED Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Music and foley","All source files format Included Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
    ],
    "Branding": [
      {
        title: "STARTUP COLLATERAL PACKAGE",
        price: "£55",
        description: "Basic branding essentials.",
        features: ["2 Stationery Design Set", "FREE Fax Template", "Print Ready Formats","UNLIMITED Revisions","100% Satisfaction Guarantee"],
      },
      {
        title: "COLLATERAL CLASSIC PACKAGE",
        price: "£105",
        description: "Full branding package for businesses.",
        features: ["2 Stationery Design Set", "UNLIMITED Revisions", "Flyer Design","Brochure Design (Bi-fold/Tri-fold)","100% Satisfaction Guarantee"],
      },
      {
        title: "PREMIUM COLLATERAL PACKAGE",
        price: "£200",
        description: "Complete identity package.",
        features: ["Hat Design", "Invoice Design", "Email Signature Design","2 Stationery Design Set","Packaging Design","UNLIMITED Revisions","T-Shirt Design","T-Shirt Design"],
      },
    ],
    "Content Writing": [
      {
        title: "WEB CONTENT PACKAGE",
        price: "£125",
        description: "SEO-optimized blog content.",
        features: ["Some Salient Features of Our Website Copywriting Services are:", "Creative, Well-Written and 100% Original Content", "According To Your Exact Requirements","FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.","SEO friendly - Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","Quick Turnaround Time – Within 3 business days!!","Unlimited Revisions - 100% Satisfaction Guaranteed!","Proofing by our in-house experts – 0% mistakes guarantee!","100% Satisfaction Guarantee"],
      },
      {
        title: "ARTICLE WRITING PACKAGE",
        price: "£770",
        description: "Professional website content.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Original Content","100% Satisfaction Guarantee"],
      },
      {
        title: "BLOG WRITING PACKAGE",
        price: "£1020",
        description: "Extensive content creation.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Satisfaction Guarantee", "Editing", "Publishing", "Designing" ],
      },
    ],
    "Social Media": [
      {
        title: "STARTUP FIRE PACKAGE",
        price: "£199",
        description: "For improving engagement.",
        features: ["3 postings per week (per network) Facebook + Twitter + Instagram + Google+", "Content Creation", "Business Page Optimization","Social Media Strategy (Overview)","Facebook Likes Campaign","Monthly Progress report"],
      },
      {
        title: "EXELLANCE DREAM PACKAGE",
        price: "£340",
        description: "Complete social media management.",
        features: ["Copywriting & Visual designs", "Business Page Optimization", "Ad Campaign Management","Spam monitoring","Monthly Progress report","5 postings per week Facebook + Twitter + Instagram + Google+","Reputation Management","Social Account Setup","Content Creation","Social Media Listening","Query and comments reply"],
      },
      {
        title: "ALL IN ONE SPARK PACKAGE",
        price: "£555",
        description: "Ideal for small businesses.",
        features: ["Initial Brand Analysis", "Consumer Persona Analysis", "Competitor Analysis - Local and Nationwide","Customized Social Media Strategy","Copywriting - Team of 04 Dedicated Social Media Writers","Advertising - Team of 04 Dedicated Social Media Ads Experts","Content Plan Creation","35 Custom Designed Social Media Posts per month","Monthly Google Ads Management - Google Shopping + Google Search Campaigns","Goal Focused Facebook Ad Campaigns","Community Management - All Community Based Social Networks","Page Management (Facebook, Instagram, Linked In, and Twitter)","Page Spam Management - all social media platforms","Engagement Tracking Setup","Facebook Shop Creation","Detailed Page Moderation - All Social Networks","Strategic Ad Campaign Optimization & A/B Testing","Social Media Listening","Monthly Analytics Reporting - KPI Comparison and more","Social Media Listening"],
      },
    ],
  };
  const packageDetailsUAE = {
    "Logo Design": [
      {
        title: "BASIC LOGO PACKAGE",
        price: "£21",
        description: "Ideal for startups and brand revamps.",
        features: ["3 Custom Logo Concepts", "1 Designer", "4 Revisions", "24-48 hours TAT", "100% Unique Design Guarantee"],
      },
      {
        title: "START UP LOGO PACKAGE",
        price: "£35",
        description: "Perfect for growing businesses.",
        features: ["5 Custom Logo Concepts", "2 Designers", "Unlimited Revisions", "48-72 hours TAT", "Final Files in AI, PSD, PNG, PDF"],
      },
      {
        title: "LOGO GROWUP PACKAGE",
        price: "£45",
        description: "For established businesses.",
        features: ["8 Custom Logo Concepts", "3 Designers", "Unlimited Revisions", "Stationary Design", "Free MS Word Letterhead"],
      },
      {
        title: "BA SPECIAL PACKAGE",
        price: "£90",
        description: "Comprehensive branding solution.",
        features: ["UNLIMITED Logo Design Concepts", "By 5 Award Winning Designers", "Stationary Design (Business Card, Letterhead, Envelope)","Icon Design","UNLIMITED Revisions","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Satisfaction Guarantee","100% Unique Design Guarantee","48 to 72 hours TAT"],
      },
      {
        title: "BUSINESS LOGO PACKAGE",
        price: "£125",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","UNLIMITED Revisions", " 2 Stationary Design Sets (Business Card, Letterhead, Envelope)","Icon Design","Double Sided Flyer Design / Bi-Fold Brochure","FREE MS Word Letterhead","Free Email Signature","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "GOLD LOGO PACKAGE",
        price: "£220",
        description: "Comprehensive branding solution.",
        features: ["Unlimited Logo Concepts", "8 Award-Winning Designers","Icon Design","UNLIMITED Revisions", "2 Stationary Design Sets (Business Card, Letterhead, Envelope)","FREE MS Word Letterhead","Free Email Signature","3 Page Custom Website","2 Stock Photos","2 Banner Designs","jQuery Slider","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "ILLUSTRATION PACKAGE",
        price: "£175",
        description: "Comprehensive branding solution.",
        features: ["5 unique Illustrations", "Unlimited color Variations", "Unlimited color Variations","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee" , "100% Unique Design Guarantee"],
      },
      {
        title: "MASCOT PACKAGE",
        price: "£290",
        description: "Comprehensive branding solution.",
        features: ["3 Unique mascot Design", "2-3 Combinations", "100% Custom Illustration","Unlimited Revisions","48 to 72 hours TAT","All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Website Development": [
      {
        title: "BASIC WEBSITE PACKAGE",
        price: "£105",
        description: "Ideal for small businesses and startups.",
        features: ["2 Stock Images", "3 Pages Website", "1 jQuery Slider Banner", "Contact/Query Form", "Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "START UP WEBSITE PACKAGE",
        price: "£195",
        description: "Suitable for businesses looking for expansion.",
        features: ["5 Stock Photos", "5 Pages Website", "3 Banner Design", "1 jQuery Slider Banner", "FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","100% Satisfaction Guarantee","100% Unique Design Guarantee" , "Mobile Responsive will be Additional $200*","CMS will be Additional $250*"],
      },
      {
        title: "PROFESSIONAL WEBSITE PACKAGE",
        price: "£415",
        description: "Best for online stores.",
        features: ["10 Unique Pages Website", "CMS / Admin Panel Support", "8 Stock images", "5 Banner Designs", "1 jQuery Slider Banner","FREE Google Friendly Sitemap","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee", "100% Unique Design Guarantee","Mobile Responsive will be Additional $200*"],
      },
      {
        title: "ELITE WEBSITE PACKAGE",
        price: "£685",
        description: "Complete web solution.",
        features: ["Upto 15 Unique Pages Website", "Conceptual and Dynamic Website", "Mobile Responsive", "Online Reservation/Appointment Tool (Optional)", "Online Payment Integration (Optional)","Custom Forms","Lead Capturing Forms (Optional)","Striking Hover Effects","Newsletter Subscription (Optional)","Newsfeed Integration","Social Media Integration","Search Engine Submission","5 Stock Photos","3 Unique Banner Design","1 jQuery Slider Banner","Complete W3C Certified HTML","48 to 72 hours TAT","Complete Deployment","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
      {
        title: "BUSINESS WEBSITE PACKAGE",
        price: "£1100",
        description: "Complete web solution.",
        features: ["30 Seconds 2D Explainer Video", "Voice - Over & Sound Effects", "Professional Script Writing", "Storyboard", "SEO Meta Tags","Custom Made, Interactive, Dynamic & High End Design","Custom WP (or) Custom PHP Development","1 jQuery Slider Banner","Up to 10 Custom Made Banner Designs","10 Stock Images","Unlimited Revisions","Special Hoover Effects","Content Management System (CMS)","Online Appointment","Online Payment Integration (Optional)","Multi Lingual (Optional)","Custom Dynamic Forms (Optional)","Signup Area (For Newsletters, Offers etc.)","Search Bar","Live Feeds of Social Networks Integration (Optional)","Mobile Responsive","FREE 5 Years Domain Name","Free Google Friendly Sitemap","Search Engine Submission","Complete W3C Certified HTML","Industry Specified Team of Expert Designers and Developers","Complete Deployment","Dedicated Accounts Manager","100% Ownership Rights","100% Satisfaction Guarantee","100% Unique Design Guarantee"],
      },
    ],
    "Animations": [
      {
        title: "2D STANDARD LOGO ANIMATION",
        price: "£78",
        description: "Simple logo animations.",
        features: ["3 custom and Unique design", "2 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","3 Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "2D ADVANCE LOGO PACKAGE",
        price: "£150",
        description: "Short explainer video for businesses.",
        features: ["3 custom and Unique design", "3 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and Effects","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D STANDARD LOGO ANIMATION",
        price: "£200",
        description: "Ideal for corporate storytelling.",
        features: ["5 custom and Unique design", "5 Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Dynamic colours","background music","Source files format Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
      {
        title: "3D ADVANCE ANIMATION",
        price: "£250",
        description: "High-end animation package.",
        features: ["UNLIMITED custom and Unique design", "UNLIMITED Unique Animation styles", "Camera Angles Positioning", "Lighting/Composing","unlimited Revisions","Animation and VFX","Music and foley","All source files format Included Mp4 MOV ETC","100% SATISFACTION GURANTEE","100% unique design gurantee"],
      },
    ],
    "Branding": [
      {
        title: "STARTUP COLLATERAL PACKAGE",
        price: "£55",
        description: "Basic branding essentials.",
        features: ["2 Stationery Design Set", "FREE Fax Template", "Print Ready Formats","UNLIMITED Revisions","100% Satisfaction Guarantee"],
      },
      {
        title: "COLLATERAL CLASSIC PACKAGE",
        price: "£105",
        description: "Full branding package for businesses.",
        features: ["2 Stationery Design Set", "UNLIMITED Revisions", "Flyer Design","Brochure Design (Bi-fold/Tri-fold)","100% Satisfaction Guarantee"],
      },
      {
        title: "PREMIUM COLLATERAL PACKAGE",
        price: "£200",
        description: "Complete identity package.",
        features: ["Hat Design", "Invoice Design", "Email Signature Design","2 Stationery Design Set","Packaging Design","UNLIMITED Revisions","T-Shirt Design","T-Shirt Design"],
      },
    ],
    "Content Writing": [
      {
        title: "WEB CONTENT PACKAGE",
        price: "£125",
        description: "SEO-optimized blog content.",
        features: ["Some Salient Features of Our Website Copywriting Services are:", "Creative, Well-Written and 100% Original Content", "According To Your Exact Requirements","FREE Meta details – With each custom page, we will provide a catchy title, keywords and page description.","SEO friendly - Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","Quick Turnaround Time – Within 3 business days!!","Unlimited Revisions - 100% Satisfaction Guaranteed!","Proofing by our in-house experts – 0% mistakes guarantee!","100% Satisfaction Guarantee"],
      },
      {
        title: "ARTICLE WRITING PACKAGE",
        price: "£770",
        description: "Professional website content.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Original Content","100% Satisfaction Guarantee"],
      },
      {
        title: "BLOG WRITING PACKAGE",
        price: "£1020",
        description: "Extensive content creation.",
        features: ["1 Creative, Fresh & Well-Written Article", "By 1 Professional Copywriter", "Industry Specified Expert Copywriter","400 Words Per Page","3 to 5 Business Days Rotation","5 Revisions","According To Your Exact Requirements","Written on Your Specified Topic/Keyword","Proofing by our in-house experts","Free Submission on any article marketing directories /blog (If required)","SEO friendly – Your keyword(s) will be placed in the title, the first & last paragraphs and throughout the web copy in a natural and fluent manner","100% Ownership Rights","100% Satisfaction Guarantee", "Editing", "Publishing", "Designing" ],
      },
    ],
    "Social Media": [
      {
        title: "STARTUP FIRE PACKAGE",
        price: "£199",
        description: "For improving engagement.",
        features: ["3 postings per week (per network) Facebook + Twitter + Instagram + Google+", "Content Creation", "Business Page Optimization","Social Media Strategy (Overview)","Facebook Likes Campaign","Monthly Progress report"],
      },
      {
        title: "EXELLANCE DREAM PACKAGE",
        price: "£340",
        description: "Complete social media management.",
        features: ["Copywriting & Visual designs", "Business Page Optimization", "Ad Campaign Management","Spam monitoring","Monthly Progress report","5 postings per week Facebook + Twitter + Instagram + Google+","Reputation Management","Social Account Setup","Content Creation","Social Media Listening","Query and comments reply"],
      },
      {
        title: "ALL IN ONE SPARK PACKAGE",
        price: "£555",
        description: "Ideal for small businesses.",
        features: ["Initial Brand Analysis", "Consumer Persona Analysis", "Competitor Analysis - Local and Nationwide","Customized Social Media Strategy","Copywriting - Team of 04 Dedicated Social Media Writers","Advertising - Team of 04 Dedicated Social Media Ads Experts","Content Plan Creation","35 Custom Designed Social Media Posts per month","Monthly Google Ads Management - Google Shopping + Google Search Campaigns","Goal Focused Facebook Ad Campaigns","Community Management - All Community Based Social Networks","Page Management (Facebook, Instagram, Linked In, and Twitter)","Page Spam Management - all social media platforms","Engagement Tracking Setup","Facebook Shop Creation","Detailed Page Moderation - All Social Networks","Strategic Ad Campaign Optimization & A/B Testing","Social Media Listening","Monthly Analytics Reporting - KPI Comparison and more","Social Media Listening"],
      },
    ],
  };
  return (
    <section className={`${font.className} flex flex-col text-white justify-center items-center p-12 bg-black z-50`}>
      <h1 className="text-2xl text-center md:text-5xl text-cards font-bold">See Our Packages</h1>
      <div className="flex space-x-4 justify-center items-center mt-8">
        <button onClick={changeBackRegion} className={`px-4 py-2 z-50 rounded-md transition-all duration-300 ${region == "USA" ? "bg-cards text-black font-bold" : "bg-gray-700 hover:bg-gray-600"}`}>USA</button>
        <button onClick={changeRegionAus} className={`px-4 py-2 z-50 rounded-md transition-all duration-300 ${region == "Australia" ? "bg-cards text-black font-bold" : "bg-gray-700 hover:bg-gray-600"}`}>Australia</button>
        <button onClick={changeRegionUK} className={`px-4 py-2 z-50 rounded-md transition-all duration-300 ${region == "UK" ? "bg-cards text-black font-bold" : "bg-gray-700 hover:bg-gray-600"}`}>UK</button>
        <button onClick={changeRegion} className={`px-4 py-2 z-50 rounded-md transition-all duration-300 ${region == "Pakistan" ? "bg-cards text-black font-bold" : "bg-gray-700 hover:bg-gray-600"}`}>Pakistan</button>
        <button onClick={changeRegionUAE} className={`px-4 py-2 z-50 rounded-md transition-all duration-300 ${region == "UAE" ? "bg-cards text-black font-bold" : "bg-gray-700 hover:bg-gray-600"}`}>UAE</button>
      </div>
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
      {region == "USA" && (
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
      )}
      {region == "Pakistan" && (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {packageDetailsPkr[tab]?.map((pkg, index) => (
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
      )}
      {region == "Australia" && (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {packageDetailsAus[tab]?.map((pkg, index) => (
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
      )}
      {region == "UK" && (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {packageDetailsUK[tab]?.map((pkg, index) => (
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
      )}
      {region == "UAE" && (
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {packageDetailsUAE[tab]?.map((pkg, index) => (
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
      )}
    </section>
  );
};

export default Packages;