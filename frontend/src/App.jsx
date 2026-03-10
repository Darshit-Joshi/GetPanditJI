import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />
      </Routes>
    </>
  );
}

export default App;
