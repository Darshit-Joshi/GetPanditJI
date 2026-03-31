import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

// Pages (create these files)
import Home from "./pages/Home";
import Pandits from "./pages/Pandits";
import Kundli from "./pages/Kundli";
import KundliMilan from "./pages/KundliMilan";
import BirthChart from "./pages/BirthChart";
import DailyHoroscope from "./pages/DailyHoroscope";
import YearlyHoroscope from "./pages/YearlyHoroscope";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pandits" element={<Pandits />} />
        <Route path="/kundli" element={<Kundli />} />
        <Route path="/kundli-milan" element={<KundliMilan />} />
        <Route path="/birth-chart" element={<BirthChart />} />
        <Route path="/Dailyhoroscope" element={<DailyHoroscope />} />
        <Route path="/Yearlyhoroscope" element={<YearlyHoroscope />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
