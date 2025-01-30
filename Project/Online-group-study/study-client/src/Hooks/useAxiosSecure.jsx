import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { handleLogOut } = useAuth();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log(
          "error caught from our very own axios interceptor-->",
          error.response
        );
        if (error.response.status === 401 || error.response.status === 403) {
          // logout
          handleLogOut();
          // navigate to login
          navigate("/login");
        }
      }
    );
  }, [handleLogOut, navigate]); 
  return axiosSecure;
};

export default useAxiosSecure;
