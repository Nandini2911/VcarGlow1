"use client";

import { useState } from "react";
import { playfair } from "@/app/layout";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-50 transition-all duration-500">
<div className="max-w-[1800px] 2xl:max-w-[2200px] mx-auto px-6 sm:px-8 lg:px-12 py-1 flex justify-between items-center">        
        {/* Logo */}
        <Image
  src="/vcarglow.png"
  alt="VcarGlow Logo"
  width={70}
  height={35}
  className="sm:w-[75px] md:w-[85px] lg:w-[105px] xl:w-[105px]"
/>
      

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex gap-6 lg:gap-10 xl:gap-20 text-base lg:text-lg xl:text-xl font-bold ${playfair.className}`}
        >
          {[
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" },
].map((item) => (
  <a
    key={item.name}
    href={item.link}
    className="relative group transition duration-300"
  >
    <span className="bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 bg-clip-text text-transparent">
      {item.name}
    </span>

    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-900 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
))}
            
        </div>

        {/* Desktop Button */}
        <a
  href="#contact"
  className={`hidden md:inline-block px-4 lg:px-5 py-1 lg:py-1.5 rounded-full text-white font-semibold tracking-wider uppercase bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:scale-105 transition-all duration-300 ${playfair.className}`}
>
  Book Now
</a>

        {/* Mobile Menu Icon */}
        <button
       className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 ..."
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div
          className={`md:hidden bg-white shadow-lg px-6 py-6 space-y-5 text-lg font-semibold ${playfair.className}`}
        >
       {[
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Pricing", link: "#pricing" },
  { name: "Contact", link: "#contact" },
].map((item) => (
  <a
    key={item.name}
    href={item.link}
    className="block bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent"
    onClick={() => setOpen(false)}
  >
    {item.name}
  </a>
))}

          <button className="w-full mt-4 px-5 py-2 rounded-full text-white tracking-wider uppercase bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}