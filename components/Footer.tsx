"use client";

import { playfair } from "@/app/layout";
import { Instagram, Mail, Phone } from "lucide-react";

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
          <p className="text-sm text-gray-400">+91 9082736155</p>
          <p className="text-sm text-gray-400">vcarglow@gmail.com</p>
          <p className="text-sm text-gray-400">Shop No.7, Archana Apts, Opp. Sunder Nagar, S.V. Road, Malad (w), Mum-400064</p>

{/* Social Links */}
<div className="flex gap-4 mt-6">

  {/* Instagram */}
  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 hover:bg-gradient-to-r hover:from-pink-700 hover:to-red-500 transition duration-300"
  >
    <Instagram size={18} className="text-white" />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 hover:bg-green-500 transition duration-300"
  >
    <Phone size={18} className="text-white" />
  </a>

  {/* Email */}
  <a
    href="mailto:info@vcarglow.com"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 transition duration-300"
  >
    <Mail size={18} className="text-white" />
  </a>

</div>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-blue-800 pt-6">
        © {new Date().getFullYear()} VcarGlow. All Rights Reserved.
      </div>
    </footer>
  );
}