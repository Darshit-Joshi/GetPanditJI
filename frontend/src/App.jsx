import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
      </Routes>
    </>
  );
}

export default App;
