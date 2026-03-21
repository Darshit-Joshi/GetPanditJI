import React, { useState } from "react";

function KundliForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    time: "",
    place: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Enter Birth Details</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <input
        type="date"
        name="dob"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <input
        type="time"
        name="time"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <input
        type="text"
        name="place"
        placeholder="Place of Birth"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      />

      <button className="w-full bg-orange-500 text-white py-2 rounded">
        Generate
      </button>
    </form>
  );
}

export default KundliForm;
