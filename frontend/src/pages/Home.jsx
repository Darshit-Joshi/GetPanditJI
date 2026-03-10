import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-orange-600">Panditji</h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-orange-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Book Trusted Pandits for Your Puja
        </h2>

        <p className="text-gray-600 mb-8 max-w-xl">
          Easily book experienced pandits for all religious ceremonies
          like Griha Pravesh, Satyanarayan Katha, Rudrabhishek and more.
        </p>

        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-orange-600 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;