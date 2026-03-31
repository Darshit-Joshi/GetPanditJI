import { useState } from "react";

const dummyUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "user",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@gmail.com",
    role: "user",
  },
  {
    id: 3,
    name: "Admin Ji",
    email: "admin@gmail.com",
    role: "admin",
  },
];

function Users() {
  const [users, setUsers] = useState(dummyUsers);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
  });

  // Delete
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // Open Edit Modal
  const handleEdit = (user) => {
    setSelectedUser(user);
    setFormData(user);
  };

  // Update
  const handleUpdate = () => {
    setUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? { ...u, ...formData } : u)),
    );
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-red-200 to-yellow-100 p-6">
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg border border-orange-300 rounded-2xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-orange-800 mb-4 text-center">
          👥 Users Management
        </h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 p-2 w-full rounded-lg border border-orange-300 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-orange-300 text-orange-900">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-orange-100">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3 capitalize">{user.role}</td>

                  <td className="p-3 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(user)}
                      className="px-3 py-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(user.id)}
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

      {/* Edit Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
            <h3 className="text-lg font-semibold text-orange-700 mb-4">
              Update User
            </h3>

            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full mb-2 p-2 border border-orange-300 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full mb-2 p-2 border border-orange-300 rounded-lg"
            />

            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="w-full mb-4 p-2 border border-orange-300 rounded-lg"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            <div className="flex justify-between">
              <button
                onClick={() => setSelectedUser(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
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

export default Users;
