import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`h-screen ${
        open ? "w-64" : "w-20"
      } bg-gradient-to-b from-orange-400 via-red-400 to-yellow-300 
      text-white transition-all duration-300 shadow-xl flex flex-col`}
    >
      {/* Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="p-3 text-left hover:bg-white/20 transition"
      >
        ☰
      </button>

      {/* Title */}
      <div className="px-4 py-2 font-bold text-lg">
        {open ? "🔮 Astro Admin" : "🔮"}
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4 space-y-2">
        <NavItem to="/admin/dashboard" label="Dashboard" open={open} />
        <NavItem to="/admin/users" label="Users" open={open} />
        <NavItem to="/admin/appointments" label="Appointments" open={open} />
        <NavItem to="/admin/horoscope" label="Add Horoscope" open={open} />
      </nav>

      {/* Footer */}
      <div className="p-4 text-sm text-white/80">{open && "Admin Panel"}</div>
    </div>
  );
}

function NavItem({ to, label, open }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 mx-2 rounded-lg transition 
        ${isActive ? "bg-white text-orange-600 font-semibold" : "hover:bg-white/20"}`
      }
    >
      {/* Icon Placeholder */}
      <span>✨</span>
      {open && <span>{label}</span>}
    </NavLink>
  );
}

export default Sidebar;
