"use client";
import { useState } from "react";
import mockData from "../utils/mockData";

export default function DataTable() {
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredData = mockData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) =>
    sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full max-w-4xl mx-auto overflow-x-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="border p-2 w-full sm:w-1/3 rounded"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Sort {sortAsc ? "🔼 Ascending" : "🔽 Descending"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-2">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-2 text-sm sm:text-base">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          ◀ Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
