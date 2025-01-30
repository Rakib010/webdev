<<<<<<< HEAD
import axios from "axios";
=======
import  axios  from "axios";
>>>>>>> 6798ab54149d5e1818931ac29cc8782967a95b81

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
