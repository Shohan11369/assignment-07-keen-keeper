import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import TimeLine from './pages/TimeLine/TimeLine';
import FriendDetails from './pages/FriendDetails/FriendDetails';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/timeline",
        element: <TimeLine/>,
      },
      {
        path: "/friends",
        element: <FriendDetails/>,
      },
    ],

    errorElement: <NotFoundPage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
