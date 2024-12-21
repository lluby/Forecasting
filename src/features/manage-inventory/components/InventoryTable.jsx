import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Nomor",
    key: "nomor",
    render: (_, __, index) => <span>{index + 1}</span>,
  },
  {
    title: "Nama Kulit",
    dataIndex: "nama_kulit",
    key: "nama_kulit",
  },
  {
    title: "Jumlah",
    dataIndex: "jumlah",
    key: "jumlah",
  },
  {
    title: "Bulan",
    dataIndex: "bulan",
    key: "bulan",
  },
  {
    title: "Hasil Forecasting",
    dataIndex: "hasil_forecasting",
    key: "hasil_forecasting",
  },
  {
    title: "Aksi",
    key: "action",
    render: () => (
      <Space size="middle">
        <button>
          <EditOutlined className="text-green-500 text-xl" />
        </button>
        <button>
          <DeleteOutlined className="text-red-500 text-xl" />
        </button>
      </Space>
    ),
  },
];

const data = [
  {
    id: "1",
    nama_kulit: "Kulit Ayam",
    jumlah: 32,
    bulan: "Januari",
    hasil_forecasting: '50.3%',
  },
  {
    id: "2",
    nama_kulit: "Kulit Bebek",
    jumlah: 42,
    bulan: "Februari",
    hasil_forecasting: '12%',
  },
  {
    id: "3",
    nama_kulit: "Kulit Ikan",
    jumlah: 32,
    bulan: "Maret",
    hasil_forecasting: '14%',
  },
];

const InventoryTable = () => {
  return (
    <div>
      <Table rowKey='id' columns={columns} dataSource={data} />
    </div>
  );
};

export default InventoryTable;
