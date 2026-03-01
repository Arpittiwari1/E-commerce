import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-2">
          <li>Dashboard</li>
        </ul>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;