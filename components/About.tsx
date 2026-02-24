"use client";

import Image from "next/image";
import { playfair } from "@/app/layout";
import { motion } from "framer-motion";

export default function About() {
  return (
<section id="about" className="w-full py-20 bg-white">
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1800px] 2xl:max-w-[2200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        
        {/* Left Image */}
        <div className="relative flex justify-center">
          <Image
            src="/about2.png"
            alt="Car Detailing"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl object-cover w-full max-w-[500px] lg:max-w-[600px]"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          
          <h2
  className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[4px] bg-gradient-to-r from-blue-950 via-blue-500 to-blue-300 bg-clip-text text-transparent ${playfair.className}`}
>
  About VcarGlow
</h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At VcarGlow, we specialize in transforming vehicles into showroom-quality masterpieces. 
            Our expert team uses advanced techniques and premium products to restore shine, 
            protect paint, and enhance every detail of your car.
          </p>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            With years of experience in professional car detailing, we are committed to delivering 
            exceptional results that exceed customer expectations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            
            {[
              "Expert Professionals",
              "Premium Products",
              "Advanced Equipment",
              "Customer Satisfaction",
            ].map((title, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <h4 className={`font-semibold text-blue-900 ${playfair.className}`}>
                  {title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Skilled detailing specialists delivering exceptional results.
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </motion.div>
    </section>
  );
}