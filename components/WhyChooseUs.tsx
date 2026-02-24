"use client";

import { motion } from "framer-motion";
import { playfair } from "@/app/layout";
import { ShieldCheck, Sparkles, Clock, ThumbsUp } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality Service",
      desc: "We use top-grade products and advanced techniques to deliver flawless results.",
      icon: <Sparkles size={28} />,
    },
    {
      title: "Certified Professionals",
      desc: "Our skilled experts are trained to handle every vehicle with precision and care.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "On-Time Delivery",
      desc: "We value your time and ensure quick yet high-quality service completion.",
      icon: <Clock size={28} />,
    },
    {
      title: "Customer Satisfaction",
      desc: "Your satisfaction is our priority. We guarantee results that exceed expectations.",
      icon: <ThumbsUp size={28} />,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="w-full py-24 bg-white scroll-mt-24"
    >
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
            Why Choose Us
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover why VcarGlow is the trusted choice for professional car detailing services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-blue-500 text-white shadow-md mb-6 group-hover:scale-110 transition duration-500">
                {feature.icon}
              </div>

              <h3
                className={`text-lg font-semibold mb-4 bg-gradient-to-r from-blue-950 via-blue-600 to-blue-400 bg-clip-text text-transparent ${playfair.className}`}
              >
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}