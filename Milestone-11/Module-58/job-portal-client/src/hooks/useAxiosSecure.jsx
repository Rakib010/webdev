import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import {useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-eta-six.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logout()
            .then(() => {
              // redirect login page
              navigate("/login");
            })
            .catch((err) => console.log(err));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;

/*
 1. axios: get,post,put/patch,delete ---> easier
 2. interceptor: client ------|------>  server 
 3. client <----------|---------server
 4. in the interceptor for response === 

*/
