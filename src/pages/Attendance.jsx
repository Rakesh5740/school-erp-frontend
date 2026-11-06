import AdminLayout from "../layouts/AdminLayout";

function Attendance() {
  const attendance = [
    {
      id: 1,
      student: "Adam Mathew",
      className: "10-A",
      date: "2026-11-05",
      status: "Present",
    },
    {
      id: 2,
      student: "Reyansh Kushwaha",
      className: "10-B",
      date: "2026-11-05",
      status: "Absent",
    },
    {
      id: 3,
      student: "John Smith",
      className: "9-A",
      date: "2026-11-05",
      status: "Present",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Attendance Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Mark Attendance
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {attendance.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{record.id}</td>
                <td className="p-4">{record.student}</td>
                <td className="p-4">{record.className}</td>
                <td className="p-4">{record.date}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      record.status === "Present"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Attendance;