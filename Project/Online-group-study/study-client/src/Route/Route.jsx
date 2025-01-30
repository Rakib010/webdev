import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Register from "../components/Register/Register";
import Login from "../components/login/Login";
import CreateAssignment from "../components/createAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";
import Assignments from "../components/Assignments/Assignments";
import UpdateAssignments from "../components/updateAssignments/updateAssignments";
import DetailsAssignment from "../components/detailsAssignment/DetailsAssignment";
import MyAssignment from "../components/myAssignment/MyAssignment";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PendingAssignment from "../components/pendingAssignment/PendingAssignment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/createAssignment",
        element: (
          <PrivateRoute>
            <CreateAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/updateAssignments/:id",
        element: <UpdateAssignments />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/allAssignment/${params.id}`),
      },
      {
        path: "/detailsAssignment/:id",
        element: (
          <PrivateRoute>
            <DetailsAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/allAssignment/${params.id}`),
      },
      {
        path: "/myAssignments",
        element: (
          <PrivateRoute>
            <MyAssignment />
          </PrivateRoute>
        ),
      },
      {
        path: "/pendingAssignment",
        element: (
          <PrivateRoute>
            <PendingAssignment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
