import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../components/spinner/LoadingSpinner";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingSpinner />
  if(user) return children;
  return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;
