import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointments from "./pages/admin/Appointments";
import HoroscopeForm from "./pages/admin/HoroscopeForm";
import AdminLayout from "./components/admin/AdminLayout";
import Users from "./pages/admin/Users";
import Dashboard from "./pages/admin/Dashboard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="horoscope" element={<HoroscopeForm />} />
            <Route path="users" element={<Users />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
