/* eslint-disable react/prop-types */
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { InsertRowLeftOutlined, ProductOutlined } from "@ant-design/icons";

const items = [
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: <ProductOutlined />,
  },
  {
    key: "/manage-inventory",
    label: "Kelola Bahan Baku",
    icon: <InsertRowLeftOutlined />,
  },
];

const PrimaryLayout = ({ children }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e.key);
  };
  
  return (
    <div className="flex">
      <div className="max-h-screen h-screen">
        <div className="bg-dark-blue-500 px-3 py-5 h-16 flex justify-center items-center">
          <h1 className="text-white font-bold text-2xl text-center">LEATHERSTRAP</h1>
        </div>
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={["/dashboard"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
          className="h-full"
        />
      </div>
      <div className="container mx-auto p-5">{children}</div>
    </div>
  );
};

export default PrimaryLayout;
