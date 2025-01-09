import { useEffect, useState } from 'react';
import { List, Avatar, Spin } from 'antd';

const UserHistory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginResponse = await fetch('http://localhost:3000/api/history-login');
        const loginData = await loginResponse.json();

        // Mengambil data history kelola bahan baku dari API
        const manageInventoryResponse = await fetch('http://localhost:3000/api/manage-inventory');
        const manageInventoryData = await manageInventoryResponse.json();

        setData([...loginData, ...manageInventoryData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Spin spinning={loading}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`/profile.png=${index}`} />}
              title={item.action}
              description={`Telah melakukan perubahan pada tanggal ${new Date(item.timestamp).toLocaleString()}`}
            />
          </List.Item>
        )}
      />
    </Spin>
  );
};

export default UserHistory;
