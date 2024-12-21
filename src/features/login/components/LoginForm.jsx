import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    console.log(value);
    navigate("/dashboard", { replace: true });
  };

  return (
    <Form name="login" layout="vertical" onFinish={handleSubmit}>
      <Form.Item name="email" label="Username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}>
        <Input
          className="text-base px-2 py-4 bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-black-300 border border-gray-500 placeholder:text-black-400"
          placeholder="usename"
        />
      </Form.Item>
      <Form.Item name="password" label="Password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}>
        <Input
          className="text-base px-2 py-4 bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent text-black-300 border border-gray-500 placeholder:text-black-400"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item label={null} className="flex justify-center">
        <Button
          size="large"
          className="bg-dark-blue-500 text-white px-8 py-6 font-semibold tracking-widest rounded-xl"
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
