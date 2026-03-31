import React from "react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="py-16 px-6 bg-orange-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Start Your Spiritual Journey Today
      </h2>

      <p className="text-gray-600 mt-2">
        Talk to expert pandits or generate your kundli instantly
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Link to="/pandits">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600">
            Book Pandit
          </button>
        </Link>

        <Link to="/kundli">
          <button className="border border-orange-500 text-orange-600 px-6 py-3 rounded-xl hover:bg-orange-50">
            Generate Kundli
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FinalCTA;
