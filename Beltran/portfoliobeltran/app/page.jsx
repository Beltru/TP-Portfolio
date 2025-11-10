'use client';

import React from 'react';
import Link from 'next/link';

export default function BeltranPortfolioEnhanced() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 via-purple-500 to-pink-500 p-6 lg:p-12">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Bar */}
        <nav className="bg-white/30 backdrop-blur-sm rounded-full py-3 mb-12 border-2 border-white/30">
          <div className="flex items-center justify-center gap-4">
            <Link href="/work" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Work
            </Link>
            <Link href="/about" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              About
            </Link>
            <Link href="/projects" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Projects
            </Link>
            <Link href="contact" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Decorative Star - Top Right */}
          <svg 
            width="50" 
            height="50" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-8 right-20 text-white animate-pulse"
          >
            <path 
              d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
              fill="white"
              stroke="white"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>

          {/* Decorative Star - Left */}
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-12 left-10 text-white animate-pulse"
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

          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-4">
            Hi! I'm Beltrán.
          </h1>
          <h2 className="text-5xl lg:text-7xl font-bold text-white">
            A Programmer.
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Skills Card */}
          <div className="bg-purple-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all">
            <h3 className="text-3xl font-bold text-white mb-6">Skills</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-2">
                <p className="text-white text-sm font-medium">Fluent in 2</p>
                <p className="text-white text-sm font-medium">languages</p>
                <p className="text-white text-sm font-medium">(English and</p>
                <p className="text-white text-sm font-medium">Spanish)</p>
              </div>

              {/* Right Column */}
              <div className="space-y-2">
                <p className="text-white text-sm font-bold">Coding Skills:</p>
                <p className="text-white text-sm">JavaScript</p>
                <p className="text-white text-sm">Python</p>
                <p className="text-white text-sm">HTML</p>
                <p className="text-white text-sm">Tailwind</p>
              </div>
            </div>
          </div>

          {/* Hobbies Card */}
          <div className="bg-purple-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all">
            <h3 className="text-3xl font-bold text-white mb-6">Hobbies</h3>
            
            <div className="grid grid-cols-3 gap-4">
              {/* Music Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-700/50 rounded-2xl mb-3 flex items-center justify-center border-2 border-white/20">
                  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                    <path d="M9 18V5L21 3V16M9 18C9 19.66 7.66 21 6 21C4.34 21 3 19.66 3 18C3 16.34 4.34 15 6 15C7.66 15 9 16.34 9 18ZM21 16C21 17.66 19.66 19 18 19C16.34 19 15 17.66 15 16C15 14.34 16.34 13 18 13C19.66 13 21 14.34 21 16ZM9 10V8L21 6V8L9 10Z"/>
                  </svg>
                </div>
                <p className="text-white text-xs font-medium">Listening to<br/>music</p>
              </div>

              {/* Gaming Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-700/50 rounded-2xl mb-3 flex items-center justify-center border-2 border-white/20">
                  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                    <path d="M7.97 16L5 19C4.67 19.3 4.23 19.5 3.75 19.5C2.78 19.5 2 18.72 2 17.75V17.75C2 17.27 2.2 16.83 2.5 16.5L5.47 13.5M16.03 16L19 19C19.33 19.3 19.77 19.5 20.25 19.5C21.22 19.5 22 18.72 22 17.75V17.75C22 17.27 21.8 16.83 21.5 16.5L18.53 13.5M9 5C9 3.9 9.9 3 11 3H13C14.1 3 15 3.9 15 5V8H9V5ZM15 11C15 9.9 14.1 9 13 9H11C9.9 9 9 9.9 9 11V13C9 14.1 9.9 15 11 15H13C14.1 15 15 14.1 15 13V11Z"/>
                  </svg>
                </div>
                <p className="text-white text-xs font-medium">Playing<br/>video games</p>
              </div>

              {/* Driving Icon */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-purple-700/50 rounded-2xl mb-3 flex items-center justify-center border-2 border-white/20">
                  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"/>
                  </svg>
                </div>
                <p className="text-white text-xs font-medium">Driving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}