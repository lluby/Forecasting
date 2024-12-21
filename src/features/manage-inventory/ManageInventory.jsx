import { useState } from "react";

import Header from "../../components/common/header/Header";
import InventoryTable from "./components/InventoryTable";
import InventoryAdd from "./components/InventoryAdd";

const ManageInventory = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="relative flex flex-col bg-white">
        <Header title="Kelola Bahan Baku" />

        <div className="space-y-4">
          <div className="flex justify-end">
            <button
              onClick={handleShowModal}
              className="bg-dark-blue-500 text-white px-6 py-2 rounded-xl w-auto tracking-widest"
            >
              Add
            </button>
          </div>
          <InventoryTable />
        </div>
      </div>

      <InventoryAdd open={showModal} onCancel={handleShowModal} />
    </>
  );
};

export default ManageInventory;
