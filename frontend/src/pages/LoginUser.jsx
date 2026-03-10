import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    console.log("Login attempted");
    try {
      const baseUrl = import.meta.env.DEV
        ? "http://localhost:5000"
        : "https://getpanditji.onrender.com";

      const res = await fetch(`${baseUrl}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("adminToken", data.accessToken);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 relative overflow-hidden">
      {/* Ganesh Background */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Ganesha.svg/800px-Ganesha.svg.png"
        alt="ganesh"
        className="absolute opacity-10 w-[450px] left-10 bottom-10 pointer-events-none"
      />

      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 w-[360px]">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-6 text-sm">
          Login to book your puja with ease 🙏
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold p-3 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-5 text-gray-600">
          New here?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-orange-600 cursor-pointer"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginUser;
