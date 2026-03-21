import React from "react";

function HowItWorks() {
  const steps = [
    {
      title: "Choose a Pandit",
      desc: "Browse and select from verified astrologers",
      icon: "🧙‍♂️",
    },
    {
      title: "Book or Call",
      desc: "Schedule or start instant consultation",
      icon: "📞",
    },
    {
      title: "Get Guidance",
      desc: "Receive personalized astrology advice",
      icon: "🔮",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <p className="text-gray-500 mt-2">Get started in just 3 simple steps</p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {steps.map((step, index) => (
            <div key={index} className="p-6">
              <div className="text-5xl">{step.icon}</div>

              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>

              <p className="text-gray-500 mt-2 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
