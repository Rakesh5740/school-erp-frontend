import { Link } from "react-router-dom";
import { FaSchool } from "react-icons/fa";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck,
  FaFileAlt,
  FaMoneyBill,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white fixed left-0 top-0">
      <div className="p-6 border-b border-blue-600">
        <h1 className="text-2xl font-bold">School ERP</h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaTachometerAlt />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/students"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaUserGraduate />
              Students
            </Link>
          </li>

          <li>
            <Link
              to="/teachers"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaChalkboardTeacher />
              Teachers
            </Link>
          </li>

          <li>
            <Link
              to="/classes"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600"
            >
              <FaSchool />
              Classes
            </Link>
          </li>

          <li>
            <Link
              to="/subjects"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaBook />
              Subjects
            </Link>
          </li>

          <li>
            <Link
              to="/attendance"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaClipboardCheck />
              Attendance
            </Link>
          </li>

          <li>
            <Link
              to="/exams"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaFileAlt />
              Exams
            </Link>
          </li>

          <li>
            <Link
              to="/results"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaFileAlt />
              Results
            </Link>
          </li>

          <li>
            <Link
              to="/fees"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaMoneyBill />
              Fees
            </Link>
          </li>

          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              <FaCog />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
