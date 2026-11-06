import AdminLayout from "../layouts/AdminLayout";

function Results() {
  const results = [
    {
      id: 1,
      student: "Adam Mathew",
      subject: "Mathematics",
      marks: 92,
      grade: "A+",
    },
    {
      id: 2,
      student: "Reyansh Kushwaha",
      subject: "Science",
      marks: 88,
      grade: "A",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Results Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Add Result
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Marks</th>
              <th className="p-4 text-left">Grade</th>
            </tr>
          </thead>

          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{result.id}</td>
                <td className="p-4">{result.student}</td>
                <td className="p-4">{result.subject}</td>
                <td className="p-4">{result.marks}</td>
                <td className="p-4">{result.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Results;