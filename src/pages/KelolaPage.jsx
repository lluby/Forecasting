import React from 'react'
import { useNavigate } from "react-router-dom";

const KelolaPage = () => {
  const navigate = useNavigate();  

  return (
    <div className="relative flex flex-col px-5 py-3 bg-white">
    <p className="font-semibold text-2xl mb-4">Kelola Bahan Baku</p>
    
    <div className="flex absolute space-x-3 text-gray-700 mb-4 -right-0">
      <img 
        src="./public/profile.png" 
        alt="profile" 
        className="w-10 h-10 rounded-full border border-gray-300" 
      />
      <div>
        <p className="text-gray-700 font-medium">Hi, .....!</p>
        <p className="text-sm text-gray-500">Staff Inventory</p>
      </div>
    </div>
  
    <div className="overflow-x-auto w-full mt-24">
      <table className="min-w-full border border-gray-300 bg-white"> 
          <tr>
            <th className="px-6 py-3 border text-center font-semibold">No</th>
            <th className="px-6 py-3 border text-center font-semibold">Nama Kulit</th>
            <th className="px-6 py-3 border text-center font-semibold">Jumlah</th>
            <th className="px-6 py-3 border text-center font-semibold">Bulan</th>
            <th className="px-6 py-3 border text-center font-semibold">Hasil Forecasting</th>
            <th className="px-6 py-3 border text-center font-semibold">Aksi</th>
          </tr>
      </table>

      <button 
        onClick={() => navigate("/add")}
        className='bg-dark-blue-500 text-white px-6 py-2 rounded-xl w-auto mt-10 tracking-widest'>
        Add
      </button>
    </div> 
  </div>
  )
};

export default KelolaPage;