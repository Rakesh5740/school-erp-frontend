import AdminLayout from "../layouts/AdminLayout";

function Classes() {
  const classes = [
    {
      id: 1,
      className: "10-A",
      classTeacher: "Rahul Sharma",
      students: 45,
    },
    {
      id: 2,
      className: "10-B",
      classTeacher: "Priya Singh",
      students: 42,
    },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Classes Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add Class
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Teacher</th>
              <th className="p-4 text-left">Students</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4">{item.id}</td>
                <td className="p-4">{item.className}</td>
                <td className="p-4">{item.classTeacher}</td>
                <td className="p-4">{item.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Classes;