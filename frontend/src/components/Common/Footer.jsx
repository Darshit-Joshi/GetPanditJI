import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">AstroConnect</h2>
          <p className="mt-2 text-sm">
            Your trusted platform for astrology and spiritual guidance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/pandits">Pandits</Link>
            <Link to="/kundli">Free Kundli</Link>
            <Link to="/kundli-milan">Kundli Milan</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-2 text-sm">Email: support@astroconnect.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © 2026 AstroConnect. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
