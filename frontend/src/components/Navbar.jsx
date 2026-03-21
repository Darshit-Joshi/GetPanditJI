import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pandits", path: "/pandits" },
    { name: "Free Kundli", path: "/kundli" },
    { name: "Kundli Milan", path: "/kundli-milan" },
    { name: "Birth Chart", path: "/birth-chart" },
    { name: "Daily Horoscope", path: "/Dailyhoroscope" },
    { name: " Yearly Horoscope", path: "/Yearlyhoroscope" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/"
        ? "text-orange-600 font-semibold"
        : "text-gray-700";
    }
    return location.pathname.startsWith(path)
      ? "text-orange-600 font-semibold"
      : "text-gray-700";
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-orange-600">
        AstroConnect
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${isActive(link.path)} hover:text-orange-600`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Auth */}
      <div className="flex gap-4">
        <Link to="/login">
          <button className="border border-orange-500 text-orange-600 px-4 py-2 rounded-lg">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
