import React from 'react';
import Link from 'next/link';
import { font } from './fonts/font';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={`${font.className} bg-black text-white py-12`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 z-50">
        
        {/* Logo + Paragraph */}
        <div className="flex flex-col items-start max-w-sm z-50">
          <img 
            src="/new-logo.png" 
            alt="Logo" 
            className="w-[300px] h-[160px] object-contain z-50" 
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-lg z-50">
          <h1 className="text-cards font-bold text-xl mb-4 z-50">Quick Links</h1>
          <Link href="/"><li className="hover:text-white cursor-pointer list-none z-50">Home</li></Link>
          <Link href="/services/uiuxdesigning"><li className="hover:text-white cursor-pointer list-none z-50">Services</li></Link>
          <Link href="/contact"><li className="hover:text-white cursor-pointer list-none z-50">Contact</li></Link>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col space-y-2 text-lg z-50">
          <h1 className="text-cards font-bold text-xl mb-4 z-50">Contact Links</h1>
          <li className="hover:text-white cursor-pointer list-none z-50">+ (213)-536-0767</li>
          <li className="hover:text-white cursor-pointer list-none z-50">5141 Fawn Hollow Way Antelope, CA 95843, USA</li>
          <a href="mailto:contact@basoftech.com">
            <li className="hover:text-white cursor-pointer list-none z-50">contact@basoftech.com</li>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-2 text-lg z-50">
          <h1 className="text-cards font-bold text-xl mb-4 z-50">Social Links</h1>
          <Link href="https://www.facebook.com/profile.php?id=61574987824433">
            <li className="flex items-center space-x-2 hover:text-white cursor-pointer list-none z-50">
              <FaFacebook size={20} className="z-50" />
              <span className="z-50">Facebook</span>
            </li>
          </Link>
          <Link href="https://www.linkedin.com/company/ba-softech/">
            <li className="flex items-center space-x-2 hover:text-white cursor-pointer list-none z-50">
              <FaLinkedin size={20} className="z-50" />
              <span className="z-50">LinkedIn</span>
            </li>
          </Link>
          <Link href="https://www.instagram.com/basoftech/">
            <li className="flex items-center space-x-2 hover:text-white cursor-pointer list-none z-50">
              <FaInstagram size={20} className="z-50" />
              <span className="z-50">Instagram</span>
            </li>
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
