import { useState } from "react";

const dummyAppointments = [
  {
    id: 1,
    client: "Rahul Sharma",
    pandit: "Pandit Omkar",
    date: "2026-04-02",
    type: "Pooja",
  },
  {
    id: 2,
    client: "Priya Verma",
    pandit: "Pandit Suresh",
    date: "2026-04-03",
    type: "Video Call",
  },
  {
    id: 3,
    client: "Amit Singh",
    pandit: "Pandit Ravi",
    date: "2026-04-04",
    type: "Call",
  },
];

function Appointments() {
  const [appointments, setAppointments] = useState(dummyAppointments);
  const [filter, setFilter] = useState("");
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [newDate, setNewDate] = useState("");

  // Delete
  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  // Open reschedule modal
  const openReschedule = (appt) => {
    setSelectedAppt(appt);
    setNewDate(appt.date);
  };

  // Save reschedule
  const handleReschedule = () => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === selectedAppt.id ? { ...a, date: newDate } : a)),
    );
    setSelectedAppt(null);
  };

  const filteredData = appointments.filter((a) =>
    a.type.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-200 to-yellow-100 p-6">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg border border-orange-300 rounded-2xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-orange-800 mb-4 text-center">
          📿 Appointments
        </h2>

        {/* Filter */}
        <input
          type="text"
          placeholder="Filter by type (pooja / call / video)"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-4 p-2 rounded-lg border border-orange-300 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
        />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-orange-300 text-orange-900">
                <th className="p-3">Client</th>
                <th className="p-3">Pandit</th>
                <th className="p-3">Date</th>
                <th className="p-3">Type</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((appt) => (
                <tr key={appt.id} className="border-b hover:bg-orange-100">
                  <td className="p-3">{appt.client}</td>
                  <td className="p-3">{appt.pandit}</td>
                  <td className="p-3">{appt.date}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        appt.type === "Pooja"
                          ? "bg-yellow-200 text-yellow-800"
                          : appt.type === "Call"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                      }`}
                    >
                      {appt.type}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3 flex gap-2 justify-center">
                    <button
                      onClick={() => openReschedule(appt)}
                      className="px-3 py-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                      Reschedule
                    </button>

                    <button
                      onClick={() => handleDelete(appt.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reschedule Modal */}
      {selectedAppt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-6 w-80 shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-orange-700">
              Reschedule Appointment
            </h3>

            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full p-2 border border-orange-300 rounded-lg mb-4"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setSelectedAppt(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleReschedule}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
