"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { playfair } from "@/app/layout";
import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
    
      review:
        "Absolutely amazing service! My car looks brand new after the detailing. Highly professional team.",
    },
    {
      name: "Priya Mehta",
 
      review:
        "The ceramic coating is outstanding. The shine and protection are clearly visible. Totally worth it!",
    },
    {
      name: "Amit Verma",
      image: "/testimonials/user3.jpg",
      review:
        "Very satisfied with the interior deep cleaning. The car feels fresh and spotless.",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-24 bg-white scroll-mt-24">
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
            What Our Clients Say
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by car owners who value quality, shine and perfection.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{review.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                
                <h4
                  className={`text-base font-semibold bg-gradient-to-r from-blue-950 via-blue-600 to-blue-400 bg-clip-text text-transparent ${playfair.className}`}
                >
                  {review.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}