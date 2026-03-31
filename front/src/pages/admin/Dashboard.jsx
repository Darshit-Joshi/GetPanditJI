import { useState } from "react";

function Dashboard() {
  // Dummy stats (replace with API later)
  const [stats] = useState({
    users: 120,
    appointments: 45,
    pending: 12,
    completed: 33,
  });

  const recentAppointments = [
    { client: "Rahul Sharma", type: "Pooja", date: "2026-04-02" },
    { client: "Priya Verma", type: "Video Call", date: "2026-04-03" },
    { client: "Amit Singh", type: "Call", date: "2026-04-04" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-orange-800 mb-6">📊 Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Total Users" value={stats.users} />
        <Card title="Appointments" value={stats.appointments} />
        <Card title="Pending" value={stats.pending} />
        <Card title="Completed" value={stats.completed} />
      </div>

      {/* Recent Appointments */}
      <div className="bg-white/70 backdrop-blur-lg border border-orange-300 rounded-2xl shadow-lg p-6">
        <h2 className="text-lg font-semibold text-orange-700 mb-4">
          Recent Appointments
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-orange-200 text-orange-900">
              <th className="p-2">Client</th>
              <th className="p-2">Type</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentAppointments.map((a, i) => (
              <tr key={i} className="border-b hover:bg-orange-100">
                <td className="p-2">{a.client}</td>
                <td className="p-2">{a.type}</td>
                <td className="p-2">{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white/70 backdrop-blur-lg border border-orange-300 rounded-xl shadow-md p-4 hover:scale-105 transition">
      <h3 className="text-sm text-orange-600">{title}</h3>
      <p className="text-2xl font-bold text-orange-800">{value}</p>
    </div>
  );
}

export default Dashboard;
