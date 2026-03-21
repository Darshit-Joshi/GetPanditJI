import React from "react";
import KundliForm from "../components/Kundli/KundliForm";

function Kundli() {
  const handleSubmit = async (data) => {
    console.log("Kundli Data:", data);
  };

  return (
    <div className="py-10">
      <KundliForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Kundli;
