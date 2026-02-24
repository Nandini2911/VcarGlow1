"use client";

import { playfair } from "@/app/layout";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo / About */}
        <div>
          <h3 className={`text-xl font-semibold text-white ${playfair.className}`}>
            VcarGlow
          </h3>
          <p className="mt-4 text-sm text-gray-400">
            Professional car detailing services delivering flawless shine and
            unmatched protection for your vehicle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={`text-lg font-semibold text-white mb-4 ${playfair.className}`}>
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className={`text-lg font-semibold text-white mb-4 ${playfair.className}`}>
            Contact Info
          </h4>
          <p className="text-sm text-gray-400">+91 98765 43210</p>
          <p className="text-sm text-gray-400">info@vcarglow.com</p>
          <p className="text-sm text-gray-400">Your City, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-blue-800 pt-6">
        © {new Date().getFullYear()} VcarGlow. All Rights Reserved.
      </div>
    </footer>
  );
}