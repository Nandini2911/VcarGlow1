"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { playfair } from "@/app/layout";
import { motion } from "framer-motion";

export default function Hero() {
  const images = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-24 lg:pt-32 overflow-hidden">
      
      <div className="max-w-[1400px] 2xl:max-w-[1700px] 4xl:max-w-[2200px] mx-auto px-5 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl 4xl:text-8xl font-bold leading-tight ${playfair.className}`}
          >
            <span className="whitespace-nowrap bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 bg-clip-text text-transparent">
              Flawless Car Detailing
            </span>
            <br />
            That Makes Your Car Shine
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl 2xl:text-2xl max-w-xl mx-auto lg:mx-0">
            Experience luxury detailing services that restore, protect,
            and enhance your vehicle’s brilliance.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${playfair.className}`}>
            
           <a
  href="#contact"
  className="px-5 py-2 rounded-full text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:scale-105 transition duration-300 shadow-md text-sm sm:text-base inline-block text-center"
>
  Book Appointment
</a>

         <a
  href="#services"
  className="px-6 py-3 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300 text-sm sm:text-base inline-block text-center"
>
  View Services
</a>

          </div>
        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end overflow-hidden"
        >
          <div className="
            relative
            w-full
            max-w-[320px]
            sm:max-w-[400px]
            md:max-w-[500px]
            lg:max-w-[550px]
            xl:max-w-[650px]
            2xl:max-w-[750px]
            aspect-[4/3]
            overflow-hidden
          ">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {images.map((img, index) => (
                <div key={index} className="relative w-full flex-shrink-0">
                  <Image
                    src={img}
                    alt="Car Detailing"
                    width={800}
                    height={600}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}