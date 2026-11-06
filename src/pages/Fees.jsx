import AdminLayout from "../layouts/AdminLayout";

function Fees() {
  const fees = [
    {
      id: 1,
      student: "Adam Mathew",
      amount: "₹20,000",
      dueDate: "2026-12-15",
      status: "Paid",
    },
    {
      id: 2,
      student: "Reyansh Kushwaha",
      amount: "₹20,000",
      dueDate: "2026-12-15",
      status: "Pending",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Fees Management
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Collect Fee
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Due Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {fees.map((fee) => (
              <tr key={fee.id} className="border-b hover:bg-gray-50">
                <td className="p-4">{fee.id}</td>
                <td className="p-4">{fee.student}</td>
                <td className="p-4">{fee.amount}</td>
                <td className="p-4">{fee.dueDate}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      fee.status === "Paid"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {fee.status}
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

export default Fees;