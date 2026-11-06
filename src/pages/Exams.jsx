import AdminLayout from "../layouts/AdminLayout";

function Exams() {
  const exams = [
    {
      id: 1,
      examName: "Mid Term Exam",
      className: "10-A",
      subject: "Mathematics",
      examDate: "2026-11-10",
    },
    {
      id: 2,
      examName: "Mid Term Exam",
      className: "10-B",
      subject: "Science",
      examDate: "2026-11-12",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Exams Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Schedule Exam
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Exam</th>
              <th className="p-4 text-left">Class</th>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {exams.map((exam) => (
              <tr key={exam.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{exam.id}</td>
                <td className="p-4">{exam.examName}</td>
                <td className="p-4">{exam.className}</td>
                <td className="p-4">{exam.subject}</td>
                <td className="p-4">{exam.examDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Exams;