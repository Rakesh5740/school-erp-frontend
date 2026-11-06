function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        School ERP
      </h1>

      <div className="flex items-center gap-4">
        <span className="font-medium">Admin</span>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;