import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
/* import App from "./App.jsx"; */
/* import "animate.css"; */
import { RouterProvider } from "react-router-dom";
import router from "./Routes.jsx";
import Bookmarks from "./providers/Bookmarks.jsx";
import User from "./providers/User.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <User>
      <Bookmarks>
        <RouterProvider router={router}></RouterProvider>
      </Bookmarks>
    </User>
  </StrictMode>
);
