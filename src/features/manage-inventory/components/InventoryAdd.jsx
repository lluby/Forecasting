/* eslint-disable react/prop-types */
import { Form, Input, message, Modal, Select } from "antd";
import { MONTHS } from "../../../constants";

const InventoryAdd = ({ open, onCancel }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    message.success('Data berhasil disimpan');
    onCancel();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal open={open} onCancel={onCancel} title="Add Inventory" footer={false}>
      <div className="pt-4">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="space-y-6"
          layout="vertical"
        >
          <div className="space-y-4">
            <Form.Item
              label="Nama Kulit"
              name="nama_kulit"
              rules={[
                {
                  required: true,
                  message: "Nama kulit wajib diisi!",
                },
              ]}
              className="m-0"
            >
              <Input size="large" placeholder="Masukan nama kulit" />
            </Form.Item>

            <div className="flex justify-between gap-4">
              <Form.Item
                label="Jumlah"
                name="jumlah"
                rules={[
                  {
                    required: true,
                    message: "Jumlah wajib diisi!",
                  },
                ]}
                className="m-0 w-full"
              >
                <Input type="number" size="large" placeholder="Jumlah" />
              </Form.Item>

              <Form.Item
                label="Bulan"
                name="bulan"
                rules={[
                  {
                    required: true,
                    message: "Bulan wajib diisi!",
                  },
                ]}
                className="m-0 w-full"
              >
                <Select options={MONTHS} placeholder="Bulan" size="large" />
              </Form.Item>
              <Form.Item
                label="Hasil Forecasting"
                name="hasil_forecasting"
                rules={[
                  {
                    required: true,
                    message: "Hasil forecasting wajib diisi!",
                  },
                ]}
                className="m-0 w-full"
              >
                <Input type="number" size="large" placeholder="Hasil" />
              </Form.Item>
            </div>
          </div>

          <Form.Item label={null} className="flex justify-end">
            <button className="bg-dark-blue-500 text-white px-6 py-2 rounded-xl w-auto tracking-widest">
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default InventoryAdd;
