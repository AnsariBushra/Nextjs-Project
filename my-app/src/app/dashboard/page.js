import DataTable from "../components/DataTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <DataTable />
        </div>
      </div>
    </>
  );
}
