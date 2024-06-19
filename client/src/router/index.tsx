import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LeaderboardPage from "../pages/Leaderboard";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import Stats from "../pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",

        element: <Home />,
      },
      {
        path: "/leaderboard",
        element: <LeaderboardPage />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/mail",
        element: <Stats />,
      },
    ],
  },
]);
export default router;
