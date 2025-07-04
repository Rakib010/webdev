import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isPending] = useAdmin();
  const location = useLocation();

  if (loading || isPending) {
    return (
      <div className="flex justify-center items-center mt-72 ">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
