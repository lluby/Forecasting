const DashboardPage = () => {
  return (
    <div className="relative flex items-center justify-between px-5 py-3 bg-white">
      <p className="font-semibold text-2xl">Dashboard Page</p>
      <div className="flex items-center space-x-3 text-gray-700">
        <img 
          src="./public/profile.png" 
          alt="profile" 
          className="w-10 h-10 rounded-full border border-gray-300" 
        />
        <div>
          <p className="text-gray-700 font-medium">Hi, .....!</p>
          <p className="text-sm text-gray-500">Staff Inventory</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
