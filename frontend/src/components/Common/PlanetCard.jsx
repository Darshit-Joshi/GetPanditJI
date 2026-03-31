function PlanetCard({ Planet }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition cursor-pointer">
      {/* Top Row: Image + Name */}
      <div className="flex items-center gap-4">
        <img
          src={Planet.url}
          alt={Planet.name}
          className="w-12 h-12 object-contain"
        />

        <h2 className="text-lg font-semibold">{Planet.name}</h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-3 text-sm">{Planet.info}</p>
    </div>
  );
}

export default PlanetCard;
