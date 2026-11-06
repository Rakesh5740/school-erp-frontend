import Sidebar from "../components/Sidebar";

function Teachers() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          Teachers Management
        </h1>

        <div className="bg-white p-4 rounded shadow">
          Teachers page coming soon...
        </div>
      </div>
    </div>
  );
}

export default Teachers;