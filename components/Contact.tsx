"use client";

import { motion } from "framer-motion";
import { playfair } from "@/app/layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message Sent Successfully ✅");
        e.currentTarget.reset();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="w-full py-24 bg-gray-50 scroll-mt-32">
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
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <Phone className="text-blue-700" />
              <div>
                <h4 className={`font-semibold ${playfair.className}`}>Phone</h4>
                <p className="text-gray-600 text-sm">+91 9082736155</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-700" />
              <div>
                <h4 className={`font-semibold ${playfair.className}`}>Email</h4>
                <p className="text-gray-600 text-sm">vcarglow@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-700" />
              <div>
                <h4 className={`font-semibold ${playfair.className}`}>Location</h4>
                <p className="text-gray-600 text-sm">Shop No.7, Archana Apts, Opp. Sunder Nagar, S.V. Road, Malad (w), Mumbai - 400064</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-blue-700" />
              <div>
                <h4 className={`font-semibold ${playfair.className}`}>Working Hours</h4>
                <p className="text-gray-600 text-sm">24 Hours a Day, 7 Days a Week</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-full text-white tracking-wider uppercase bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 hover:scale-105 transition duration-300 ${playfair.className}`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}