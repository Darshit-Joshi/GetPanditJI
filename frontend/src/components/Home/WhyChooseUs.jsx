import React from "react";

function WhyChooseUs() {
  const features = [
    {
      title: "Verified Pandits",
      desc: "Only trusted and experienced astrologers",
      icon: "✅",
    },
    {
      title: "Instant Consultation",
      desc: "Connect anytime via call or chat",
      icon: "⚡",
    },
    {
      title: "Accurate Predictions",
      desc: "Based on Vedic astrology principles",
      icon: "🎯",
    },
    {
      title: "Secure Payments",
      desc: "Safe and reliable transactions",
      icon: "🔒",
    },
  ];

  return (
    <section className="py-16 px-6 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
        <p className="text-gray-500 mt-2">
          We provide reliable and trusted astrology services
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>

              <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
