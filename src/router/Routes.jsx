import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import FriendDetails from "../pages/FriendDetails/FriendDetails";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
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
        path: "/friend/:id",
        element: <FriendDetails/>,
      },
      
    ],

    errorElement: <NotFoundPage/>,
  },
]);