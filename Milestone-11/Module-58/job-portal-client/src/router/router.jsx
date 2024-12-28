import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/register/Register";
import Login from "../Pages/login/Login";
import JobDetails from "../Pages/jobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
import Apply from "../Pages/jobApply/Apply";
import MyApplication from "../Pages/MyApplication/MyApplication";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostJob from "../Pages/MyPostsJob/Mypostjob";
import ViewApplication from "../Pages/viewApplication/ViewApplication";
import AllJob from "../Pages/AllJob/AllJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJob",
        element: <AllJob></AllJob>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRouter>
            <JobDetails></JobDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-eta-six.vercel.app/jobs/${params.id}`
          ),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRouter>
            <Apply></Apply>
          </PrivateRouter>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRouter>
            <MyApplication></MyApplication>
          </PrivateRouter>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRouter>
            <AddJob></AddJob>
          </PrivateRouter>
        ),
      },
      {
        path: "/myPostedJob",
        element: (
          <PrivateRouter>
            <MyPostJob></MyPostJob>
          </PrivateRouter>
        ),
      },
      {
        path: "/viewApplication/:job_id",
        element: (
          <PrivateRouter>
            <ViewApplication></ViewApplication>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://job-portal-server-eta-six.vercel.app/job-application/jobs/${params.job_id}`
          ),
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
