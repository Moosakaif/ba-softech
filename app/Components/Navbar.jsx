"use client";

import Link from 'next/link';
import { useState } from 'react';
import { font } from './fonts/font';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    'UI UX Designing',
    'Web Development',
    'App Development',
    'Graphics Designing',
    "Ebook Services",
    "Payment Merchant Services"
  ];

  return (
    <header className={`${font.className} bg-black relative top-0 w-full`}>
      <nav className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo-main.png"
              alt="Logo"
              className="w-64 h-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white z-50 hover:text-cards transition">
            Home
          </Link>
          <Link href="/about" className="text-white z-50 hover:text-cards transition">
            About
          </Link>

          <div 
            className="relative z-50 group cursor-pointer" 
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="nav-link z-50 text-white hover:text-cards flex items-center">
              Services
              <svg className="w-4 z-50 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen && (
              <div className="absolute z-50 top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                    className="block px-4 py-2 z-50 text-sm text-gray-700 hover:bg-sky-100 hover:text-sky-700"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="text-white z-50 hover:text-cards transition">
            Contact Us
          </Link>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center text-cards font-bold">
          <a href="mailto:contact@basoftech.com" className="hover:text-white">
            contact@basoftech.com
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black w-full shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-white z-50 hover:text-cards transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left z-50 flex items-center text-white justify-between"
              >
                Services
                <svg
                  className={`w-4 h-4 z-50 transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 z-50 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                      className="block z-50 py-1 text-sm text-cards hover:text-sky-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-white z-50 hover:text-cards transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <a
              href="mailto:contact@basoftech.com"
              className="text-cards font-bold hover:text-white"
            >
              contact@basoftech.com
            </a>
          </div> 
        </div>
      )}
    </header>
  );
}
