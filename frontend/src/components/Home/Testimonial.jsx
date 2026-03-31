import React from "react";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Very accurate predictions. The pandit guided me really well.",
    },
    {
      name: "Priya Verma",
      text: "Kundli matching was quick and detailed. Highly recommended!",
    },
    {
      name: "Amit Singh",
      text: "Great experience with online consultation. Easy and reliable.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
        <p className="text-gray-500 mt-2">Trusted by thousands of users</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 rounded-2xl shadow-md border">
              <p className="text-gray-600 italic">"{review.text}"</p>
              <h4 className="mt-4 font-semibold text-gray-800">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
