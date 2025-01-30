import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Home";
import AddSchedule from "../Pages/AddSchedule/AddSchedule";
import AllSchedule from "../Pages/AllSchedule/AllSchedule";
import UpdateSchedule from "../Pages/updateSchedule/UpdateSchedule";
import AllSchedulecopy from "../Pages/AllSchedule/AllSchedulecopy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addSchedule",
        element: <AddSchedule></AddSchedule>,
      },
      {
        path: "/allSchedule",
        element: <AllSchedule></AllSchedule>,
        loader: () => fetch("http://localhost:5000/schedule"),
      },
      {
        path: "/allScheduleCopy",
        element: <AllSchedulecopy></AllSchedulecopy>,
      },
      {
        path: "/updateSchedule/:id",
        element: <UpdateSchedule></UpdateSchedule>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/schedule/${params.id}`),
      },
    ],
  },
]);

export default router;
