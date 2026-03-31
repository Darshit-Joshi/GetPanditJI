import { useState } from "react";
import { upsertHoroscope } from "../../services/horoscopeService";

const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

function HoroscopeForm() {
  const [formData, setFormData] = useState({
    sign: "",
    category: "daily",
    general: "",
    love: "",
    health: "",
    career: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.sign) {
      alert("Please select a zodiac sign");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        zodiacSign: formData.sign.toLowerCase(),
        category: formData.category,
        date: formData.date || null,
        predictions: {
          general: formData.general,
          love: formData.love,
          career: formData.career,
          health: formData.health,
        },
      };

      const res = await upsertHoroscope(payload);

      console.log("Saved:", res);
      alert("Horoscope saved successfully!");

      // reset form
      setFormData({
        sign: "",
        category: "daily",
        general: "",
        love: "",
        health: "",
        career: "",
        date: "",
      });
    } catch (err) {
      console.error(err.message);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-200 to-yellow-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/70 backdrop-blur-lg border border-orange-300 rounded-2xl shadow-2xl p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-orange-800">
          🔮 Add Horoscope
        </h2>

        {/* Zodiac */}
        <div>
          <label className="text-sm text-orange-700">Zodiac Sign</label>
          <select
            name="sign"
            value={formData.sign}
            onChange={handleChange}
            className="w-full mt-1 p-3 rounded-lg bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Sign</option>
            {zodiacSigns.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="text-sm text-orange-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-1 p-3 rounded-lg bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        {/* Date (optional) */}
        <div>
          <label className="text-sm text-orange-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full mt-1 p-3 rounded-lg bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Textareas */}
        {["general", "love", "health", "career"].map((field) => (
          <div key={field}>
            <label className="capitalize text-sm text-orange-700">
              {field === "career" ? "Career / Future Scope" : field}
            </label>
            <textarea
              name={field}
              value={formData[field]}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-3 rounded-lg bg-orange-50 border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>
        ))}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold text-white 
                     bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 
                     hover:from-orange-600 hover:via-red-600 hover:to-yellow-600
                     transform hover:scale-105 active:scale-95
                     transition-all duration-300 shadow-lg disabled:opacity-60"
        >
          {loading ? "Saving..." : "Submit Horoscope ✨"}
        </button>
      </form>
    </div>
  );
}

export default HoroscopeForm;
