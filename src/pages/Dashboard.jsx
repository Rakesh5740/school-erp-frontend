import AdminLayout from "../layouts/AdminLayout";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Students"
          count="1250"
          color="bg-blue-500"
        />

        <StatCard
          title="Teachers"
          count="75"
          color="bg-green-500"
        />

        <StatCard
          title="Classes"
          count="20"
          color="bg-orange-500"
        />

        <StatCard
          title="Subjects"
          count="40"
          color="bg-purple-500"
        />
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Recent Activities
        </h2>

        <ul className="space-y-3">
          <li>✅ New student admission completed</li>
          <li>✅ Attendance updated for Class 10-A</li>
          <li>✅ Science exam schedule published</li>
          <li>✅ Fee payment received from 15 students</li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Exams
          </h2>

          <ul className="space-y-2">
            <li>Mathematics - 10 Nov</li>
            <li>Science - 12 Nov</li>
            <li>English - 15 Nov</li>
            <li>Computer - 18 Nov</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Fee Collection
          </h2>

          <p className="text-4xl font-bold text-green-600">
            ₹3,50,000
          </p>

          <p className="text-gray-500 mt-2">
            Collected this month
          </p>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;