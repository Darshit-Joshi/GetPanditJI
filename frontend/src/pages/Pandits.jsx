import React, { useState } from "react";
import img2 from "../assets/img2.jpg";

function Pandits() {
  const [mode, setMode] = useState("audio");

  const pandit = {
    name: "Pandit Sharma Ji",
    expertise: "Vedic Astrology",
    priceAudio: 20,
    priceVideo: 30,
    image: img2,
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        {/* Top Section */}
        <div className="flex gap-6 items-center">
          <img src={pandit.image} className="w-28 h-28 rounded-full" />

          <div>
            <h2 className="text-2xl font-bold">{pandit.name}</h2>
            <p className="text-gray-500">{pandit.expertise}</p>
          </div>
        </div>

        {/* Mode Selection */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-4">
            Choose Consultation Type
          </h3>

          <div className="flex gap-4">
            <button
              onClick={() => setMode("audio")}
              className={`px-4 py-2 rounded-lg border ${
                mode === "audio" ? "bg-orange-500 text-white" : ""
              }`}
            >
              Audio Call (₹{pandit.priceAudio}/min)
            </button>

            <button
              onClick={() => setMode("video")}
              className={`px-4 py-2 rounded-lg border ${
                mode === "video" ? "bg-orange-500 text-white" : ""
              }`}
            >
              Video Call (₹{pandit.priceVideo}/min)
            </button>
          </div>
        </div>

        {/* Payment */}
        <div className="mt-8">
          <button className="w-full bg-green-500 text-white py-3 rounded-lg text-lg hover:bg-green-600">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pandits;
