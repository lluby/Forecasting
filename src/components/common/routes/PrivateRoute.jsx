import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "../../../pages/DashboardPage";
import NotFoundPage from "../../../pages/NotFound";
import PrimaryLayout from "../layout/PrimaryLayout";
import Coba from "../../../pages/Coba"
import AddForm from "../../../features/login/components/AddForm"
import ManageInventoryPage from "../../../pages/ManageInventoryPage";

const PrivateRoute = () => {
  return (
    <ProtectedRoute>
      <PrimaryLayout>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/manage-inventory" element={<ManageInventoryPage />}/>
          <Route path="/cobaan" element={<Coba />}/>
          <Route path="/add" element={<AddForm />}/>
        </Routes>
      </PrimaryLayout>
    </ProtectedRoute>
  );
};

export default PrivateRoute;
