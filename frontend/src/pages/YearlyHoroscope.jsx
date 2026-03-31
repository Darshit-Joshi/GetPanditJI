import PlanetCard from "../components/Common/PlanetCard";
import zodiacData from "../data/zodiacData";

function YearlyHoroscope() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🪐 Planetary Horoscope 2026
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {zodiacData.map((planet, index) => (
          <PlanetCard key={index} Planet={planet} />
        ))}
      </div>
    </div>
  );
}

export default YearlyHoroscope;
