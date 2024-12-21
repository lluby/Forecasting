import React, { useState } from "react";

const Coba = () => {
  // Data awal
  const [data, setData] = useState([
    { id: 1, jenis: "Technology Department", jumlah: "Head of Technology" },
    { id: 2, jenis: "Technology Department", jumlah: "Head of Technology" },
    { id: 3, jenis: "Technology Department", jumlah: "Head of Technology" },
    { id: 4, jenis: "Technology Department", jumlah: "Head of Technology" },
    { id: 5, jenis: "Technology Department", jumlah: "Head of Technology" },
  ]);

  // Fungsi untuk menghapus baris
  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Kelola Bahan Baku</h1>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-yellow-100">
              <tr>
                <th className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700">Jenis Kulit</th>
                <th className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700">Jumlah</th>
                <th className="px-6 py-3 border border-gray-300 text-left text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border border-gray-300 text-sm text-gray-900">{item.jenis}</td>
                  <td className="px-6 py-4 border border-gray-300 text-sm text-gray-900">{item.jumlah}</td>
                  <td className="px-6 py-4 border border-gray-300 text-sm text-gray-900">
                    <div className="flex gap-2">
                      {/* Edit Button */}
                      <button className="text-blue-500 hover:text-blue-700">
                        <i className="fas fa-edit"></i>
                      </button>
                      {/* Delete Button */}
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tombol Add */}
        <div className="mt-6">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coba;
