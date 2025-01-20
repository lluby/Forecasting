/* eslint-disable react/prop-types */
import { Modal, message } from "antd";

const UserDelete = ({ open, onCancel, itemId, fetchData }) => {
  console.log(itemId); // Menampilkan ID pengguna yang akan dihapus
  
  // Fungsi untuk menangani konfirmasi penghapusan
  const handleConfirmDelete = async () => {
    try {
      // Gunakan URL yang sesuai untuk API penghapusan pengguna
      const response = await fetch(`http://localhost:3000/api/user/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Jika backend memerlukannya
        },
      });

      if (response.ok) {
        message.success("User berhasil dihapus");
        fetchData(); // Memuat ulang data pengguna setelah penghapusan
        onCancel(); // Menutup modal setelah berhasil
      } else {
        const errorData = await response.json();
        message.error(errorData.error || "Terjadi kesalahan saat menghapus user");
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
      onOk={handleConfirmDelete} // Menjalankan fungsi penghapusan saat tombol OK diklik
    >
      <p>Apakah Anda yakin ingin menghapus pengguna ini? Tindakan ini tidak dapat dibatalkan.</p>
    </Modal>
  );
};

export default UserDelete;
