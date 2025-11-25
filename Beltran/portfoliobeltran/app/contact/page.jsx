'use client';

import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 via-purple-500 to-pink-500 p-6 lg:p-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Bar */}
        <nav className="bg-purple-700/40 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border-2 border-white/30">
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Work
            </Link>
            <Link href="/about" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              About
            </Link>
            <Link href="/projects" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Projects
            </Link>
            <Link href="/contact" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-12">
            Contact
          </h1>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Hello!
            </h2>
            <p className="text-xl lg:text-2xl text-white leading-relaxed mb-10">
              Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.
            </p>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/beltran" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-300/40 backdrop-blur-sm border-2 border-purple-800 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-purple-300/60 transition-all group"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
                <span className="text-black font-medium">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/beltran" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-300/40 backdrop-blur-sm border-2 border-purple-800 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-purple-300/60 transition-all group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span className="text-black font-medium">Linked in</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/beltran" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-300/40 backdrop-blur-sm border-2 border-purple-800 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-purple-300/60 transition-all group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span className="text-black font-medium">Github</span>
              </a>

              {/* Gmail */}
              <a 
                href="mailto:beltran@gmail.com" 
                className="bg-purple-300/40 backdrop-blur-sm border-2 border-purple-800 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-purple-300/60 transition-all group"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-black font-medium">Gmail</span>
              </a>
            </div>
          </div>
{/* Right Side - Image with stars */}
<div className="relative flex justify-center lg:justify-end">

  {/* Decorative Star - Top Right */}
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 24 24"
    className="absolute -top-6 -right-6 text-white animate-pulse z-10"
  >
    <path 
      d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
      fill="white"
      stroke="white"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>

  {/* Decorative Star - Bottom Left */}
  <svg 
    width="50" 
    height="50" 
    viewBox="0 0 24 24" 
    className="absolute -bottom-6 -left-6 text-white animate-pulse z-10"
    style={{ animationDelay: '0.5s' }}
  >
    <path 
      d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
      fill="white"
      stroke="white"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>

  {/* Image container */}
  <div className="w-full max-w-md bg-purple-300/30 backdrop-blur-sm rounded-3xl border-4 border-black overflow-hidden flex items-center justify-center h-[380px]">
    <img 
      src="/bel.png"
      alt="Beltran"
      className="w-full h-full object-cover"
    />
  </div>

          </div>
        </div>
      </div>
    </div>
  );
}