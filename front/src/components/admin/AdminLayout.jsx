import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 min-h-screen bg-orange-50">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
