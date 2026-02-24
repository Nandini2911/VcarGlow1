"use client";

import { motion } from "framer-motion";
import { playfair } from "@/app/layout";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Wash",
      price: "₹999",
      features: [
        "Complete Exterior Wash",
        "Interior Vacuum Cleaning",
        "Dashboard Cleaning",
        "Tyre Polish",
      ],
      highlight: false,
    },
    {
      name: "Premium Detail",
      price: "₹2499",
      features: [
        "Exterior Machine Polish",
        "Interior Deep Cleaning",
        "Wax Polish",
        "Glass Cleaning",
        "Tyre & Rim Detailing",
      ],
      highlight: true,
    },
    {
      name: "Ultimate Glow",
      price: "₹4999",
      features: [
        "Full Car Detailing",
        "Ceramic Coating",
        "Interior Steam Cleaning",
        "Engine Bay Cleaning",
        "Complete Protection Package",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider bg-gradient-to-r from-blue-950 via-blue-600 to-blue-300 bg-clip-text text-transparent ${playfair.className}`}
          >
            Pricing Plans
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Choose a package that fits your needs and experience premium car detailing services.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 shadow-md transition-all duration-500 ${
                plan.highlight
                  ? "bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white scale-105 shadow-2xl"
                  : "bg-white hover:shadow-2xl"
              }`}
            >
              {/* Plan Name */}
              <h3
                className={`text-xl font-semibold mb-4 ${
                  plan.highlight
                    ? "text-white"
                    : `bg-gradient-to-r from-blue-950 via-blue-600 to-blue-400 bg-clip-text text-transparent ${playfair.className}`
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-3xl font-bold mb-6">
                {plan.price}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

             <a
  href="#contact"
  className={`block text-center w-full py-2 rounded-full text-sm font-semibold tracking-wider uppercase transition duration-300 ${
    plan.highlight
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