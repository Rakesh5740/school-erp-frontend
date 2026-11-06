import { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Modal from "../components/Modal";

function Students() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const students = [
    {
      id: 1,
      admissionNo: "ADM001",
      name: "Adam Mathew",
      className: "10-A",
      phone: "9876543210",
      email: "adam@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      admissionNo: "ADM002",
      name: "Reyansh Kushwaha",
      className: "10-B",
      phone: "9876543211",
      email: "reyansh@gmail.com",
      status: "Active",
    },
    {
      id: 3,
      admissionNo: "ADM003",
      name: "John Smith",
      className: "9-A",
      phone: "9876543212",
      email: "john@gmail.com",
      status: "Inactive",
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.admissionNo.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Students Management</h1>

          <p className="text-gray-500 mt-1">
            Total Students: {filteredStudents.length}
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <FaPlus />
          Add Student
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <input
          type="text"
          placeholder="Search Student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Admission No</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="border-b odd:bg-white even:bg-gray-50 hover:bg-blue-50"
              >
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.admissionNo}</td>
                <td className="p-4 font-medium">{student.name}</td>
                <td className="p-4">{student.className}</td>
                <td className="p-4">{student.phone}</td>
                <td className="p-4">{student.email}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      student.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td className="p-4 text-center">
                  <button className="bg-green-500 text-white p-2 rounded mr-2 hover:bg-green-600">
                    <FaEdit />
                  </button>

                  <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Student Modal */}
      {showModal && (
        <Modal title="Add Student" onClose={() => setShowModal(false)}>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Admission No"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Student Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full border p-3 rounded-lg"
            />

            <select className="w-full border p-3 rounded-lg">
              <option>10-A</option>
              <option>10-B</option>
              <option>9-A</option>
            </select>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </Modal>
      )}
    </AdminLayout>
  );
}

export default Students;
