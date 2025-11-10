"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-2 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <p className="text-xl font-semibold text-black">
          Ailén de Barbará ✧ 
        </p>

        {/* Links */}
        <div className="space-x-12">
            <Link href="/contact" className="text-white  bg-[#BD53FE]  px-4 py-2 rounded-2xl">
            Contact
          </Link>
          <Link href="/" className="text-black">
            About me
          </Link>
          <Link href="/about" className="text-black">
            Work
          </Link>
          <Link href="/services" className="text-black">
            Projects
          </Link>
        
        </div>
      </div>
    </nav>
  );
}
