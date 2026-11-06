import AdminLayout from "../layouts/AdminLayout";

function Teachers() {
  const teachers = [
    {
      id: 1,
      employeeId: "EMP001",
      name: "Rahul Sharma",
      subject: "Mathematics",
      phone: "9876543210",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      employeeId: "EMP002",
      name: "Priya Singh",
      subject: "Science",
      phone: "9876543211",
      email: "priya@gmail.com",
    },
  ];

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Teachers Management
      </h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Employee ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Email</th>
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-b">
                <td className="p-4">{teacher.id}</td>
                <td className="p-4">{teacher.employeeId}</td>
                <td className="p-4">{teacher.name}</td>
                <td className="p-4">{teacher.subject}</td>
                <td className="p-4">{teacher.phone}</td>
                <td className="p-4">{teacher.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Teachers;