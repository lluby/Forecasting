import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Pastikan axios diimpor

const LoginForm = () => {
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const handleSubmit = async (values) => {
    const { username, password } = values;

    try {
      // Kirim request ke API untuk login
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password,
      });

      // Pastikan response berisi token dan role sebelum menyimpannya di localStorage
      if (response.data.token && response.data.role) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);

        // Navigasi ke halaman dashboard setelah login sukses
        navigate("/dashboard", { replace: true });

        // Menampilkan notifikasi sukses
        notification.success({
          message: 'Login Berhasil!',
          description: 'Selamat datang kembali!',
          duration: 5,
        });
      } else {
        throw new Error('Token atau role tidak ditemukan dalam respons');
      }
    } catch (error) {
      // Menampilkan notifikasi error jika login gagal
      notification.error({
        message: 'Login Gagal!',
        description: error.response ? error.response.data.message : 'Username atau password salah.',
        duration: 5,
      });

      console.error('Login gagal:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <Form name="login" layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input
          className="text-base px-2 py-4 bg-transparent focus:bg-transparent text-black-300 border border-gray-500 placeholder:text-black-400"
          placeholder="Username"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          className="text-base px-2 py-4 bg-transparent focus:bg-transparent text-black-300 border border-gray-500 placeholder:text-black-400"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item label={null} className="flex justify-center">
        <Button
          size="large"
          className="bg-blue-500 text-white px-8 py-6 font-semibold tracking-widest rounded-xl"
          type="primary"
          htmlType="submit"
        >
          LOGIN
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
