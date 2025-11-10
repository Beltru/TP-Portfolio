'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    mbn: {
      title: "MBN Finances",
      description: "A project dedicated to financial management. Allowing you to keep track of weekly expenses, the amount of money available, expenses throughout the year and objectives."
    },
    dihy: {
      title: "DiHy Care",
      description: "An app designed to help people with diabetes or hypertension keep track of their data. It connects to their personal glucometer and saves the information it generates."
    }
  };

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
            <Link href="/contact" className="text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto">
            I'm passionate about crafting experiences that are engaging, accessible, and user-centric.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          
          {/* MBN Finances Project */}
          <div 
            onClick={() => setSelectedProject('mbn')}
            className="bg-purple-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all cursor-pointer relative group"
          >
            {/* Decorative Star */}
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-5 -right-5 text-white animate-pulse"
            >
              <path 
                d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
                fill="white"
                stroke="white"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Project Image */}
              <div className="w-full lg:w-48 h-48 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl shrink-0 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>

              {/* Project Info */}
              <div className="grow">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  MBN Finances
                </h3>
                <p className="text-white text-base lg:text-lg leading-relaxed mb-4">
                  A project dedicated to financial management. Allowing you to keep track of weekly expenses, the amount of money available, expenses throughout the year and objectives.
                </p>
                <button className="text-white hover:text-white/80 transition-colors font-medium group-hover:underline">
                  Click to view details →
                </button>
              </div>
            </div>
          </div>

          {/* DiHy Care Project */}
          <div 
            onClick={() => setSelectedProject('dihy')}
            className="bg-purple-900/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 hover:border-white/50 transition-all cursor-pointer relative group"
          >
            {/* Decorative Star */}
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-5 -right-5 text-white animate-pulse"
              style={{ animationDelay: '0.3s' }}
            >
              <path 
                d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
                fill="white"
                stroke="white"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Project Image */}
              <div className="w-full lg:w-48 h-48 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl shrink-0 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>

              {/* Project Info */}
              <div className="grow">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  DiHy Care
                </h3>
                <p className="text-white text-base lg:text-lg leading-relaxed mb-4">
                  An app designed to help people with diabetes or hypertension keep track of their data. It connects to their personal glucometer and saves the information it generates.
                </p>
                <button className="text-white hover:text-white/80 transition-colors font-medium group-hover:underline">
                  Click to view details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal/Popup - MBN Finances */}
      {selectedProject === 'mbn' && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-purple-900 rounded-3xl p-8 lg:p-12 max-w-5xl w-full max-h-[90vh] overflow-y-auto border-4 border-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="float-right text-white hover:text-white/70 text-4xl font-bold leading-none"
            >
              ×
            </button>

            {/* Project Header */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              MBN Finances
            </h2>
            <p className="text-white text-lg lg:text-xl mb-8 leading-relaxed">
              A project dedicated to financial management. Allowing you to keep track of weekly expenses, the amount of money available, expenses throughout the year and objectives.
            </p>

            {/* Project Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full h-64 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>
              <div className="w-full h-64 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>
              <div className="w-full h-64 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-700/50 text-white px-4 py-2 rounded-full text-sm">React</span>
                  <span className="bg-purple-700/50 text-white px-4 py-2 rounded-full text-sm">Next.js</span>
                  <span className="bg-purple-700/50 text-white px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal/Popup - DiHy Care */}
      {selectedProject === 'dihy' && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-purple-900 rounded-3xl p-8 lg:p-12 max-w-5xl w-full max-h-[90vh] overflow-y-auto border-4 border-white/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="float-right text-white hover:text-white/70 text-4xl font-bold leading-none"
            >
              ×
            </button>

            {/* Project Header */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              DiHy Care
            </h2>
            <p className="text-white text-lg lg:text-xl mb-8 leading-relaxed">
              An app designed to help people with diabetes or hypertension keep track of their data. It connects to their personal glucometer and saves the information it generates.
            </p>

            {/* Project Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full h-64 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>
              <div className="w-full h-64 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>
              <div className="w-full h-64 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-700/50 text-white px-4 py-2 rounded-full text-sm">React Native</span>
                  <span className="bg-purple-700/50 text-white px-4 py-2 rounded-full text-sm">TypeScript</span>
                  <span className="bg-purple-700/50 text-white px-4 py-2 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}