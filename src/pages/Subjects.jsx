import AdminLayout from "../layouts/AdminLayout";

function Subjects() {
  const subjects = [
    {
      id: 1,
      subjectCode: "SUB001",
      subjectName: "Mathematics",
      teacher: "Rahul Sharma",
    },
    {
      id: 2,
      subjectCode: "SUB002",
      subjectName: "Science",
      teacher: "Priya Singh",
    },
    {
      id: 3,
      subjectCode: "SUB003",
      subjectName: "English",
      teacher: "Amit Verma",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Subjects Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Subject
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Code</th>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Teacher</th>
            </tr>
          </thead>

          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{subject.id}</td>
                <td className="p-4">{subject.subjectCode}</td>
                <td className="p-4">{subject.subjectName}</td>
                <td className="p-4">{subject.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Subjects;