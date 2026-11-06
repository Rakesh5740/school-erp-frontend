import AdminLayout from "../layouts/AdminLayout";

function Students() {
  const students = [
    {
      id: 1,
      name: "Adam Mathew",
      className: "10-A",
      phone: "9876543210",
      email: "adam@gmail.com",
    },
    {
      id: 2,
      name: "Reyansh Kushwaha",
      className: "10-B",
      phone: "9876543211",
      email: "reyansh@gmail.com",
    },
    {
      id: 3,
      name: "John Smith",
      className: "9-A",
      phone: "9876543212",
      email: "john@gmail.com",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Students Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Student
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{student.id}</td>
                <td className="p-4">{student.name}</td>
                <td className="p-4">{student.className}</td>
                <td className="p-4">{student.phone}</td>
                <td className="p-4">{student.email}</td>

                <td className="p-4 text-center">
                  <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">
                    Edit
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
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