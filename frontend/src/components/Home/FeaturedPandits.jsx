import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../assets/img2.jpg"; // adjust path if needed
import img1 from "../../assets/img1.jpg";

function FeaturedPandits() {
  const pandits = [
    {
      name: "Pandit Joshi Ji",
      expertise: "Vedic Astrology, Kundli",
      price: "₹20/min",
      image: img1,
    },
    {
      name: "Shri Rahul JI Maharaj",
      expertise: "Marriage Matching, Puja",
      price: "₹15/min",
      image: img2,
    },
  ];

  return (
    <section className="py-16 px-6 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Featured Pandits
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Consult experienced and trusted astrologers
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {pandits.map((pandit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex items-center gap-6"
            >
              {/* Image */}
              <img
                src={pandit.image}
                alt={pandit.name}
                className="w-24 h-24 rounded-full object-cover"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pandit.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{pandit.expertise}</p>

                <p className="text-orange-600 font-semibold mt-2">
                  {pandit.price}
                </p>

                {/* CTA */}
                <Link to="/pandits">
                  <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Consult Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPandits;
