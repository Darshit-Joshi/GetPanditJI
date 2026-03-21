import React from "react";
import { Link } from "react-router-dom";

function QuickTools() {
  const tools = [
    {
      title: "Free Kundli",
      desc: "Generate your birth chart instantly",
      path: "/kundli",
      icon: "🔮",
    },
    {
      title: "Kundli Milan",
      desc: "Check compatibility for marriage",
      path: "/kundli-milan",
      icon: "❤️",
    },
    {
      title: "Daily Horoscope",
      desc: "Know your day in advance",
      path: "/horoscope/daily",
      icon: "🌟",
    },
    {
      title: "Book Pandit",
      desc: "Consult experts via call",
      path: "/pandits",
      icon: "🧙‍♂️",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Explore Astrology Tools
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Quick access to our most popular services
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 mt-10">
          {tools.map((tool) => (
            <Link key={tool.title} to={tool.path}>
              <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer border hover:border-orange-400">
                
                <div className="text-4xl">{tool.icon}</div>

                <h3 className="text-xl font-semibold mt-4 text-gray-800">
                  {tool.title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm">
                  {tool.desc}
                </p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default QuickTools;