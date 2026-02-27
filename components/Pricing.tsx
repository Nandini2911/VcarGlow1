"use client";

import { motion } from "framer-motion";
import { playfair } from "@/app/layout";

export default function Pricing() {
  const services = [
    {
      name: "Teflon Coating",
      prices: {
        small: "₹2500 - ₹2800",
        medium: "₹3000 - ₹3200",
        big: "₹4000 - ₹4500",
      },
    },
    {
      name: "Interior (Deep Cleaning)",
      prices: {
        small: "₹1800 - ₹2000",
        medium: "₹2000 - ₹2500",
        big: "₹2000 - ₹2500",
      },
    },
    {
      name: "Ceramic Coating",
      prices: {
        small: "₹20,000",
        medium: "₹20,000",
        big: "₹30,000 - ₹35,000",
      },
      highlight: true,
    },
    {
      name: "Wax Polish",
      prices: {
        small: "₹2000 - ₹2200",
        medium: "₹2000 - ₹2200",
        big: "₹2000 - ₹2200",
      },
    },
    {
      name: "Silencer Coating",
      prices: {
        small: "₹1500 - ₹1800",
        medium: "₹1500 - ₹1800",
        big: "₹1500 - ₹1800",
      },
    },
    {
      name: "Anti-rust Coating",
      prices: {
        small: "₹2500",
        medium: "₹2500",
        big: "₹3000",
      },
    },
    {
      name: "PPF Coating",
      prices: {
        small: "50000",
        medium: "50000",
        big: "55000",
      },
    },
    {
      name: "Film",
      prices: {
        small: "4000",
        medium: "4000",
        big: "5000",
      },
    },
    {
      name: "Headlight Polish",
      prices: {
        small: "₹800",
        medium: "₹800",
        big: "₹800",
      },
    },
    {
      name: "Glass Polish",
      prices: {
        small: "₹1200 - ₹1500",
        medium: "₹1200 - ₹1500",
        big: "₹1200 - ₹1500",
      },
    },
    {
      name: "Chrome Cleaning",
      prices: {
        small: "₹800",
        medium: "₹800",
        big: "₹800",
      },
    },
    {
      name: "Washing",
      prices: {
        small: "Coming Soon",
        medium: "Coming Soon",
        big: "Coming Soon",
      },
    },
  ];

  return (
    <section id="pricing" className="w-full py-28 bg-gray-50 scroll-mt-24">
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
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide bg-gradient-to-r from-blue-950 via-blue-700 to-blue-400 bg-clip-text text-transparent ${playfair.className}`}
          >
            Service Pricing
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                service.highlight
                  ? "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white scale-105"
                  : "bg-white"
              }`}
            >
              {/* Title */}
              <h3
                className={`text-xl font-semibold mb-6 ${
                  service.highlight
                    ? "text-white"
                    : `bg-gradient-to-r from-blue-950 via-blue-600 to-blue-400 bg-clip-text text-transparent ${playfair.className}`
                }`}
              >
                {index + 1}. {service.name}
              </h3>

              {/* Pricing Rows */}
              <div className="space-y-3 text-sm">

                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Small</span>
                  <span>{service.prices.small}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Medium</span>
                  <span>{service.prices.medium}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-medium">Big</span>
                  <span>{service.prices.big}</span>
                </div>

              </div>

              {/* Button */}
              <a
                href="#contact"
                className={`mt-6 inline-block w-full text-center py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition duration-300 ${
                  service.highlight
                    ? "bg-white text-blue-900 hover:scale-105"
                    : "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white hover:scale-105"
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}