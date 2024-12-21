import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = "12345";

  return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
