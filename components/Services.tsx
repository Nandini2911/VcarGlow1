"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { playfair } from "@/app/layout";

export default function Services() {
  const services = [
    {
      title: "Exterior Detailing / Machine Polish",
      desc: "Deep exterior cleaning with machine polishing to restore shine and remove swirl marks.",
      img: "/services/exterior-detailing.png",
    },
    {
      title: "Interior Deep Cleaning",
      desc: "Complete vacuuming, steam cleaning and conditioning for a fresh and hygienic cabin.",
      img: "/services/interior-deep-cleaning.png",
    },
    {
      title: "Ceramic Coating",
      desc: "Long-lasting ceramic protection that enhances gloss and protects paint from damage.",
      img: "/services/ceramic-coating.png",
    },
    {
      title: "Wax Polish (Foam Pad)",
      desc: "Premium wax polish to enhance shine and provide temporary paint protection.",
      img: "/services/wax-polish.png",
    },
    {
      title: "Headlight Polish",
      desc: "Restore clarity and brightness to dull or yellow headlights.",
      img: "/services/headlight-polish.png",
    },
    {
      title: "Glass Polish & Water Spot Removal",
      desc: "Professional glass treatment to remove stains and improve visibility.",
      img: "/services/glass-polish.png",
    },
    {
      title: "Silencer Coating",
      desc: "Heat-resistant coating to protect and improve the durability of your silencer.",
      img: "/services/silencer-coating.png",
    },
    {
      title: "Anti-Rust Underbody Coating",
      desc: "Protect your vehicle's underbody from rust and corrosion.",
      img: "/services/anti-rust-underbody.png",
    },
    {
      title: "Chrome Cleaning",
      desc: "Restore the shine and remove oxidation from chrome parts.",
      img: "/services/chrome-cleaning.png",
    },
    {
      title: "Complete Car Wash",
      desc: "Premium hand wash with high-quality products for spotless finish.",
      img: "/services/complete-car-wash.png",
    },
    {
      title: "PPF Coating (Coming Soon)",
      desc: "Paint Protection Film to safeguard your vehicle from scratches and stone chips.",
      img: "/services/ppf-coating.png",
    },
    {
      title: "Film Coating (Coming Soon)",
      desc: "Protective film application for enhanced durability and gloss.",
      img: "/services/film-coating.png",
    },
  ];

  return (
    <section id="services" className="w-full py-24 bg-gray-50 scroll-mt-24">
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
            Our Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3
  className={`text-lg font-semibold bg-gradient-to-r from-blue-950 via-blue-600 to-blue-400 bg-clip-text text-transparent ${playfair.className}`}
>
  {service.title}
</h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

               <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="mt-3 px-5 py-2 rounded-full text-white text-sm bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:scale-105 transition duration-300 shadow-md"
>
  Book Now
</button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}