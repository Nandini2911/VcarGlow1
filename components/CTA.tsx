"use client";

import { motion } from "framer-motion";
import { playfair } from "@/app/layout";

export default function CTA() {
  return (
    <section id="cta" className="w-full py-24 relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600"></div>

      {/* Soft Glow Effect */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Heading */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider ${playfair.className}`}
          >
            Ready to Give Your Car a Flawless Shine?
          </h2>

          <p className="mt-6 text-base sm:text-lg max-w-2xl mx-auto text-gray-200">
            Book your detailing appointment today and experience premium care,
            protection and perfection for your vehicle.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">

           <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className={`px-8 py-3 rounded-full bg-white text-blue-900 font-semibold tracking-wider uppercase hover:scale-105 transition duration-300 shadow-lg ${playfair.className}`}
>
  Book Now
</button>

<button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-900 transition duration-300 tracking-wider uppercase"
>
  Contact Us
</button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}