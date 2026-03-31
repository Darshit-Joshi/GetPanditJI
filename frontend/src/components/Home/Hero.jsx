import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
          >
            Connect with Trusted Pandits Online
          </motion.h1>

          <p className="mt-4 text-gray-600 text-lg">
            Get accurate kundli insights, match horoscopes, and consult expert
            pandits via video or audio call anytime.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            <Link to="/pandits">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition">
                Book a Pandit
              </button>
            </Link>

            <Link to="/kundli">
              <button className="border border-orange-500 text-orange-600 px-6 py-3 rounded-xl hover:bg-orange-50 transition">
                Generate Kundli
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side (Image / Illustration) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3659/3659899.png"
            alt="Astrology"
            className="w-72 md:w-96"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
