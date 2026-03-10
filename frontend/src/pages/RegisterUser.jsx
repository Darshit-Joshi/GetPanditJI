import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const baseUrl = import.meta.env.DEV ? "http://localhost:5000" : "xyz";
      const data = await fetch(`${baseUrl}/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data1 = await data.json();
      if (!data.ok) {
        throw new Error(data.message || "Registration failed");
      }
      localStorage.setItem("userToken", data1.token);

      navigate("/login"); // frontend route
    } catch (error) {
      alert(error.message || "Registration failed");
    }

    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 relative overflow-hidden">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ganesha.svg/800px-Ganesha.svg.png"
        alt="ganesh"
        className="absolute opacity-10 w-[500px] right-10 bottom-10 pointer-events-none"
      />

      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 w-[380px]">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-5 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-orange-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterUser;
