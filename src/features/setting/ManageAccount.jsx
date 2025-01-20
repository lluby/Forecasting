import { useEffect, useState } from "react";
import Header from "../../components/common/header/Header";
import UserTable from "./components/UserTable" 
import UserAdd from "./components/UserAdd"; 
import { message } from "antd";

const ManageAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]); 

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user"); 
      const result = await response.json();
      setData(result); 
    } catch (error) {
      console.log(error);
      message.error("Terjadi kesalahan saat mengambil data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="relative flex flex-col bg-white">
        <Header title="Kelola Akun" />

        <div className="space-y-4">
          <div className="flex justify-end">
            <button
              onClick={handleShowModal}
              className="bg-dark-blue-500 text-white px-6 py-2 rounded-xl w-auto tracking-widest"
            >
              Add
            </button>
          </div>
          <UserTable data={data} fetchData={fetchData} />
        </div>
      </div>

      {/* Modal Add Account */}
      <UserAdd open={showModal} onCancel={handleShowModal} fetchData={fetchData} />
    </>
  );
};

export default ManageAccount;
