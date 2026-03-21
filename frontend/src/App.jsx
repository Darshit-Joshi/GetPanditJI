import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (create these files)
import Home from "./pages/Home";
import Pandits from "./pages/Pandits";
import Kundli from "./pages/Kundli";
import KundliMilan from "./pages/KundliMilan";
import BirthChart from "./pages/BirthChart";
import DailyHorrorscope from "./pages/DailyHoroscope";
import YearlyHorrorscope from "./pages/YearlyHoroscope";
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
        <Route path="/horoscope/daily" element={<DailyHorrorscope />} />
        <Route path="/horoscope/yearly" element={<YearlyHorrorscope />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
