import Image from "next/image";
import Navbar from "./components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#B8CBE7]">
      <Navbar />
      
      <main className="flex flex-col min-h-screen w-full items-center justify-center pt-20">
        {/* First Section - Portfolio */}
        <section className="flex flex-row w-full h-screen items-center justify-center gap-0 relative bg-linear-to-b from-[#B8CBE7] to-[#486F9A]"> 
          <section className="flex flex-col mr-40"> 
            
            {/* Center/Right - PORTFOLIO text overlapping */}
            <div className="relative flex">
              {/* Main PORTFOLIO text */}
              <div className="relative">
                <h1 className="text-[120px] lg:text-8xl font-bold text-black leading-none tracking-tight">
                  PORTFOLIO
                </h1>
              </div>
            </div>
            
            {/* Left side - Image placeholder */}
            <div className="relative">
  <div className="w-[280px] h-[420px] lg:w-[350px] lg:h-[500px] bg-white border-4 border-black rounded-3xl overflow-hidden flex items-center justify-center p-4">
    
    <div className="w-full h-full bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl overflow-hidden flex items-center justify-center">
      <img 
        src="/ailu.png"
        alt="Ailu"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

          </section>
          
          {/* Stacked faded text on right */}
          <div className="absolute right-12 lg:right-32 mt-30 flex flex-col">
            <h1 className="text-[100px] lg:text-[140px] font-bold text-white/40 leading-none tracking-tight">
              TFOLIO
            </h1>
            <h1 className="text-[100px] lg:text-[140px] font-bold text-white/30 leading-none tracking-tight -mt-10 lg:-mt-14">
              TFOLIO
            </h1>
            <h1 className="text-[100px] lg:text-[140px] font-bold text-white/20 leading-none tracking-tight -mt-10 lg:-mt-14">
              TFOLIO
            </h1>
            <h1 className="text-[100px] lg:text-[140px] font-bold text-white/10 leading-none tracking-tight -mt-10 lg:-mt-14">
              TFOLIO
            </h1>
            <h1 className="text-[100px] lg:text-[140px] font-bold text-white/10 leading-none tracking-tight -mt-10 lg:-mt-14">
              TFOLIO
            </h1>
      
            {/* Info Card */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white shadow-2xl p-6 rounded-xl z-30 min-w-[300px]">
              <p className="text-black text-base lg:text-lg">
                <span className="font-bold">Figma:</span> ailendbort
              </p>
              <p className="text-black text-base lg:text-lg mt-2">
                <span className="font-bold">IG:</span> ailuu_db
              </p>
              <p className="text-black text-base lg:text-lg mt-2">
                <span className="font-bold">LI:</span> debarbara.ailen
              </p>
            </div>
          </div>
        </section>

        {/* Second Section - Hello, I'm Ailen */}
        <section className="flex flex-row w-full min-h-screen items-center justify-center relative">
          {/* Blue top section */}
          <div className="absolute top-0 left-0 w-full h-[25%] bg-[#486F9A]"></div>
          
          {/* Light section */}
          <div className="absolute bottom-0 left-0 w-full h-[75%] bg-[#E1E7F3]"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-row w-full max-w-7xl items-center justify-between px-12 lg:px-24 gap-12">
            {/* Left side - Text */}
            <div className="flex flex-col max-w-xl">
              <h1 className="text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
                Hello,<br />I'm Ailen !
              </h1>
              <p className="text-black text-lg lg:text-xl leading-relaxed mb-6">
                I am a self-taught Graphic Designer based in Argentina with extensive designing and programming experience. I am currently in my last high school year and working on another project.
              </p>
            </div>

            {/* Right side - Image placeholder with date */}
            <div className="relative">
              <div className="w-[350px] h-[450px] lg:w-[420px] lg:h-[520px] bg-white border-4 border-black relative">
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              
              {/* Date badge */}
              <div className="absolute top-1/3 -left-8 bg-purple-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg z-20">
                3rd July 2007
              </div>
            </div>
          </div>
        </section>

        {/* Third Section - Contact & Image */}
        <section className="w-full min-h-screen bg-[#E1E7F3] relative">
          <div className="container mx-auto px-6 lg:px-12 py-20">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
              {/* Left side - Text and LinkedIn button */}
              <div className="flex flex-col max-w-md">
                <p className="text-black text-xl lg:text-2xl leading-relaxed mb-8">
                  My last high school year and working on another project.
                </p>
                <a 
                  href="https://linkedin.com/in/debarbara-ailen" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-600 transition-colors shadow-lg inline-block text-center max-w-xs"
                >
                  LinkedIn Link
                </a>
              </div>

              {/* Right side - Image with badges */}
              <div className="relative">
                <div className="w-[300px] h-[350px] lg:w-[420px] lg:h-[450px] bg-white border-4 border-black relative">
                  <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="2" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                
                {/* Argentinian badge */}
                <div className="absolute top-8 -right-4 bg-purple-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg z-20">
                  Argentinian
                </div>
              </div>
            </div>

            {/* Contact Card - Floating */}
            <div className="absolute right-12 lg:right-24 top-1/2 transform -translate-y-1/2 bg-[#5B7FA8] text-white p-8 rounded-2xl shadow-2xl z-30 min-w-[320px]">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-4xl font-bold">Contact</h2>
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
                    fill="white"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-lg mb-2">Buenos Aires, Argentina</p>
              <p className="text-lg mb-2">debarbara.ailen@gmail.com</p>
              <p className="text-lg">+54 11 6886-6341</p>
            </div>
          </div>
        </section>

        {/* Fourth Section - Projects */}
        <section className="w-full min-h-screen bg-[#5B7FA8] py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-6xl lg:text-7xl font-bold text-black mb-12">Projects</h2>
            
            {/* Project Card - DiHy Care */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl mb-8">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Project Image */}
                <div className="w-[200px] h-[200px] lg:w-[220px] lg:h-[220px] bg-white shrink-0">
                  <div className="w-full h-full relative">
                  <div className="flex items-center justify-center w-full lg:w-48 h-48 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl shrink-0 overflow-hidden">
                <img className="w-[48vw] h-[15vh]" preserveAspectRatio="none" src='/dihylogo.png'>
                
                </img>
              </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="grow">
                  <h3 className="text-4xl lg:text-5xl font-bold text-black mb-4">DiHy Care</h3>
                  <p className="text-black text-lg lg:text-xl leading-relaxed">
                    An app designed to help people with diabetes or hypertension keep track of their data. It connects to their personal glucometer and saves the information it generates.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Card - Malar.IA */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Project Image */}
                <div className="w-[200px] h-[200px] lg:w-[220px] lg:h-[220px] bg-white shrink-0">
                <div className="flex items-center justify-center w-full lg:w-60 h-60 bg-purple-300/30 backdrop-blur-sm border-4 border-black rounded-2xl shrink-0 overflow-hidden">
                <img className="w-[35vw] h-[35vh]" preserveAspectRatio="none" src='/logo.png'>
                </img>
              </div>
                </div>

                {/* Project Info */}
                <div className="grow">
                  <h3 className="text-4xl lg:text-5xl font-bold text-black mb-4">Malar.IA</h3>
                  <p className="text-black text-lg lg:text-xl leading-relaxed">
                    A website with AI-trained technology that analyzes blood images viewed under a microscope to detect malaria and improve diagnosis and management of patient records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fifth Section - Skills, Experience, Hobbies */}
        <section className="w-full min-h-screen bg-linear-to-b from-[#8BA5C9] to-[#A6BDDC] py-20 relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Column - Skills & Hobbies */}
              <div className="space-y-12">
                {/* Skills */}
                <div className="bg-[#A6BDDC]/50 rounded-3xl p-8 lg:p-10">
                  <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">Skills</h2>
                  
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-4">
                      <p className="text-black text-lg font-bold">Responsible</p>
                      <p className="text-black text-lg font-bold">Well-organized</p>
                      <p className="text-black text-lg font-bold">Teamwork</p>
                      <p className="text-black text-lg font-bold">Time management</p>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-4">
                      <p className="text-black text-lg font-bold">Creative</p>
                      <p className="text-black text-lg font-bold">Initiative and autonomy</p>
                      <p className="text-black text-lg font-bold">Hard working</p>
                    </div>
                  </div>
                </div>

                {/* Hobbies & Interests */}
                <div className="bg-[#A6BDDC]/50 rounded-3xl p-8 lg:p-10">
                  <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">Hobbies & Interests</h2>
                  
                  <div className="grid grid-cols-3 gap-6 lg:gap-8">
                    {/* Hockey */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 mb-3 text-[#5B7FA8]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M2 17L6 13L8 15L12 11L16 15L18 13L22 17M2 7L6 3L8 5L12 1L16 5L18 3L22 7"/>
                        </svg>
                      </div>
                      <p className="text-black font-bold text-lg">Hockey</p>
                    </div>
                    
                    {/* Reading */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 mb-3 text-[#5B7FA8]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M21 4H7C5.89 4 5 4.89 5 6V18C5 19.11 5.89 20 7 20H21C22.11 20 23 19.11 23 18V6C23 4.89 22.11 4 21 4M21 18H7V6H21V18M3 6V20C3 21.11 3.89 22 5 22H19V20H5V6H3Z"/>
                        </svg>
                      </div>
                      <p className="text-black font-bold text-lg">Reading</p>
                    </div>
                    
                    {/* Design */}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 mb-3 text-[#5B7FA8]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M21 16V4H3V16H21M21 2C22.11 2 23 2.89 23 4V16C23 17.11 22.11 18 21 18H14V20H16V22H8V20H10V18H3C1.89 18 1 17.11 1 16V4C1 2.89 1.89 2 3 2H21Z"/>
                        </svg>
                      </div>
                      <p className="text-black font-bold text-lg">Design</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Experience */}
              <div className="relative">
                <div className="bg-[#7B9BC4] rounded-3xl p-8 lg:p-10 relative">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-5xl lg:text-6xl font-bold text-black">Experience</h2>
                    <svg 
                      width="40" 
                      height="40" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
                        fill="white"
                        stroke="white"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Experience 1 */}
                    <div className="border-l-4 border-white pl-4">
                      <p className="text-white text-sm mb-1">2020- 2025 | ORT, High School</p>
                      <p className="text-black text-xl font-bold">Student</p>
                    </div>
                    
                    {/* Experience 2 */}
                    <div className="border-l-4 border-white pl-4">
                      <p className="text-white text-sm mb-1">2024 | IA Programmer</p>
                      <p className="text-black text-xl font-bold">Developer</p>
                    </div>
                    
                    {/* Experience 3 */}
                    <div className="border-l-4 border-white pl-4">
                      <p className="text-white text-sm mb-1">2025 | UX/UI Designer</p>
                      <p className="text-black text-xl font-bold">Designer</p>
                    </div>
                    
                    {/* Experience 4 */}
                    <div className="border-l-4 border-white pl-4">
                      <p className="text-white text-sm mb-1">2025 | Hockey Coach</p>
                      <p className="text-black text-xl font-bold">Coach</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                      #Creativity
                    </span>
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                      #Communication
                    </span>
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                      #Adaptability
                    </span>
                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                      #Intensity
                    </span>
                  </div>
                </div>

                {/* Decorative Stars */}
                <svg 
                  width="50" 
                  height="50" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-6 -left-6 text-white"
                >
                  <path 
                    d="M12 2L15 9L22 9L16 14L19 21L12 16L5 21L8 14L2 9L9 9L12 2Z" 
                    fill="white"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}