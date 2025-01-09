/* eslint-disable react/prop-types */
import { Modal, message } from "antd";

const InventoryDelete = ({ open, onCancel, itemId, fetchData }) => {
  console.log(itemId);
  // Fungsi untuk menangani konfirmasi penghapusan
  const handleConfirmDelete = async () => {
    try {
      // Gunakan URL yang benar
      const response = await fetch(`http://localhost:3000/api/bahan-baku/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Tambahkan jika backend memerlukannya
        },
      });

      if (response.ok) {
        message.success("Item berhasil dihapus");
        fetchData();
        onCancel(); // Tutup modal setelah sukses
      } else {
        const errorData = await response.json();
        message.error(errorData.error || "Terjadi kesalahan saat menghapus item");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Terjadi kesalahan pada koneksi");
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title="Konfirmasi Hapus"
      okText="Hapus"
      cancelText="Batal"
      onOk={handleConfirmDelete} // Panggil fungsi konfirmasi saat klik OK
    >
      <p>Apakah Anda yakin ingin menghapus item ini? Tindakan ini tidak dapat dibatalkan.</p>
    </Modal>
  );
};

export default InventoryDelete;
