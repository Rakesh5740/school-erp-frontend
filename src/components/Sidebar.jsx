import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
  FaBook,
  FaClipboardCheck,
  FaFileAlt,
  FaMoneyBill,
  FaChartLine,
} from "react-icons/fa";

function Sidebar() {
  const navClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-white text-blue-700 font-semibold"
        : "text-white hover:bg-blue-600"
    }`;

  return (
    <div className="w-64 h-screen bg-blue-700 fixed left-0 top-0">

      <div className="p-6 border-b border-blue-600">
        <h1 className="text-2xl font-bold text-white">
          School ERP
        </h1>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">

          <li>
            <NavLink to="/" className={navClass}>
              <FaTachometerAlt />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/students" className={navClass}>
              <FaUserGraduate />
              Students
            </NavLink>
          </li>

          <li>
            <NavLink to="/teachers" className={navClass}>
              <FaChalkboardTeacher />
              Teachers
            </NavLink>
          </li>

          <li>
            <NavLink to="/classes" className={navClass}>
              <FaSchool />
              Classes
            </NavLink>
          </li>

          <li>
            <NavLink to="/subjects" className={navClass}>
              <FaBook />
              Subjects
            </NavLink>
          </li>

          <li>
            <NavLink to="/attendance" className={navClass}>
              <FaClipboardCheck />
              Attendance
            </NavLink>
          </li>

          <li>
            <NavLink to="/exams" className={navClass}>
              <FaFileAlt />
              Exams
            </NavLink>
          </li>

          <li>
            <NavLink to="/results" className={navClass}>
              <FaChartLine />
              Results
            </NavLink>
          </li>

          <li>
            <NavLink to="/fees" className={navClass}>
              <FaMoneyBill />
              Fees
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;