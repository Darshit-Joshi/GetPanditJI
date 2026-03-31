import { useEffect, useState } from "react";
import { getHoroscopeByType } from "../services/Horoscope";

function DailyHoroscope() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const zodiacOrder = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getHoroscopeByType("daily");
      console.log("FRONTEND RESPONSE:", res);
      setData(res);
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to load horoscope."); // Show error to user
    } finally {
      setLoading(false); // ✅ CRITICAL: Stop the loading spinner!
    }
  };
  // sort zodiac signs properly
  const safeData = Array.isArray(data) ? data : [];

  const sortedData = [...safeData].sort(
    (a, b) =>
      zodiacOrder.indexOf(a.zodiacSign) - zodiacOrder.indexOf(b.zodiacSign),
  );
  // loading state
  if (loading) {
    return <p className="p-6 text-lg">Loading...</p>;
  }

  // error state
  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daily Horoscope</h1>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedData.map((h) => (
          <div
            key={h._id}
            className="border p-4 rounded cursor-pointer hover:bg-gray-100 transition"
            onClick={() => setSelected(h)}
          >
            <h2 className="font-semibold capitalize">{h.zodiacSign}</h2>

            <p className="text-sm text-gray-600">
              {h.predictions?.general?.slice(0, 80)}...
            </p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelected(null)} // close on outside click
        >
          <div
            className="bg-white p-6 rounded w-11/12 md:w-1/2 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h2 className="text-xl font-bold mb-4 capitalize">
              {selected.zodiacSign}
            </h2>

            <p className="mb-2">
              <strong>General:</strong> {selected.predictions.general}
            </p>
            <p className="mb-2">
              <strong>Love:</strong> {selected.predictions.love}
            </p>
            <p className="mb-2">
              <strong>Health:</strong> {selected.predictions.health}
            </p>
            <p className="mb-2">
              <strong>Career:</strong> {selected.predictions.career}
            </p>

            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DailyHoroscope;
