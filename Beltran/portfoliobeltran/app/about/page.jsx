'use client';

import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-600 via-purple-500 to-pink-500 p-6 lg:p-12">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Bar */}
        <nav className="bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border-2 border-white/30">
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
            <Link href="contact" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero Section - About Me */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left - Image placeholder with star */}
            <div className="relative">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-6 -left-6 text-white animate-pulse z-10"
              >
                <path 
                  d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
                  fill="white"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
              
              <div className="w-full h-[400px] bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-3xl relative overflow-hidden flex items-center justify-center">
                <img 
                  src="/bel.png"
                  alt="Beltran"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {/* Right - About text */}
            <div className="text-white space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                I'm Beltrán.
              </h1>
              
              <p className="text-xl lg:text-2xl font-semibold leading-relaxed">
                I'm a 11th-grade student at ORT High School, working from Buenos Aires, Argentina.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed opacity-90">
                I really enjoy web development and experimenting with new components, libraries, and technologies to ensure that what I'm doing is innovative and visually appealing. The projects I worked on were both the best experiences I've had in high school today, and also what I enjoyed about front-end design. Thinking of ways to make the design better.
              </p>
            </div>
          </div>
        </section>

        {/* Second Section - Images */}
        <section className="mb-20">
          {/* Description text */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              I created these projects/pages developed for my first school project. I really enjoyed that experience, and then I discovered the possibility of writing code then to create web experiences in my liking and in my own style. I realized that this was for me.
            </p>
          </div>
        </section>

        {/* Third Section - Front-end Development */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <p className="text-white text-2xl lg:text-3xl font-bold leading-relaxed max-w-4xl mx-auto">
              During my last two years of high school, I was in charge of the front-end development for the projects I worked on.
            </p>
          </div>

          {/* 4 Images Grid */}
          <div className="flex gap-6 items-center justify-center">
              <div className="flex items-center justify-center w-full lg:w-60 h-60 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl shrink-0 overflow-hidden">
                <img className="w-[50vw] h-[20vh]" preserveAspectRatio="none" src='/dihylogo.png'>
                </img>
              </div>
              <div className="flex items-center justify-center w-full lg:w-60 h-60 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl shrink-0 overflow-hidden">
                <img className="w-[20vw] h-[30vh]" preserveAspectRatio="none" src='/mbnlogo.png'>
                </img>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}