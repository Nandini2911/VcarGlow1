"use client";

import { motion } from "framer-motion";
import { playfair } from "@/app/layout";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Inspection & Assessment",
      desc: "We carefully inspect your vehicle to understand its condition and recommend the best detailing solution.",
    },
    {
      number: "02",
      title: "Deep Cleaning",
      desc: "Complete interior and exterior cleaning using professional-grade tools and products.",
    },
    {
      number: "03",
      title: "Polishing & Protection",
      desc: "Machine polishing, ceramic coating or protective treatment to restore shine and protect paint.",
    },
    {
      number: "04",
      title: "Final Quality Check",
      desc: "Thorough inspection to ensure every detail meets our premium quality standards.",
    },
  ];

  return (
    <section id="process" className="w-full py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider bg-gradient-to-r from-blue-950 via-blue-600 to-blue-300 bg-clip-text text-transparent ${playfair.className}`}
          >
            Our Process
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Our structured detailing process ensures flawless results and long-lasting protection.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-900 to-blue-400 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Box */}
                <div className="md:w-1/2 p-6">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 p-8">
                    
                    <h3
                      className={`text-xl font-semibold mb-4 bg-gradient-to-r from-blue-950 via-blue-600 to-blue-400 bg-clip-text text-transparent ${playfair.className}`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-900 to-blue-500 text-white items-center justify-center font-bold shadow-lg">
                  {step.number}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}