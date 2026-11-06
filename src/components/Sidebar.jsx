import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">School ERP</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/students">Students</Link>
        </li>

        <li>
          <Link to="/teachers">Teachers</Link>
        </li>

        <li>Classes</li>
        <li>Attendance</li>
        <li>Exams</li>
        <li>Fees</li>
      </ul>
    </div>
  );
}

export default Sidebar;
