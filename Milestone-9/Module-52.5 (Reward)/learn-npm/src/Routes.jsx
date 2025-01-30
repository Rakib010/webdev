import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import PostDetails from "./components/PostDetails";
import Common from "./components/Common";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Post></Post>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/post/:postId",
        element: <PostDetails></PostDetails>,
        /* loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`), */
      },
      {
        /* pager por jei :btn? variable lekha hoyse eita hocche optional params  */
        path: "/common/:page/:btn?",
        element: <Common></Common>,
      },
    ],
  },
]);

export default router;
