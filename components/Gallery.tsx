"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { playfair } from "@/app/layout";

export default function Gallery() {
  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
  ];

  return (
    <section id="gallery" className="w-full py-24 bg-gray-50 scroll-mt-24">
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
            Our Work Gallery
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Take a look at some of our recent detailing transformations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={img}
                  alt="Gallery Image"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span
                  className={`text-white text-lg font-semibold tracking-wide ${playfair.className}`}
                >
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}