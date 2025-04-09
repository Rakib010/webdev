import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";

const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export default useAuth;
