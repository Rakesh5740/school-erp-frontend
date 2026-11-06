import AdminLayout from "../layouts/AdminLayout";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function Students() {
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

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Students Management
          </h1>

          <p className="text-gray-500 mt-1">
            Total Students: {students.length}
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <FaPlus />
          Add Student
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <input
          type="text"
          placeholder="Search Student..."
          className="w-full md:w-80 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
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
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b odd:bg-white even:bg-gray-50 hover:bg-blue-50"
              >
                <td className="p-4">{student.id}</td>

                <td className="p-4">
                  {student.admissionNo}
                </td>

                <td className="p-4 font-medium">
                  {student.name}
                </td>

                <td className="p-4">
                  {student.className}
                </td>

                <td className="p-4">
                  {student.phone}
                </td>

                <td className="p-4">
                  {student.email}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white ${
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
    </AdminLayout>
  );
}

export default Students;