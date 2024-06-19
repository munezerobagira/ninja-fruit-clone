import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LeaderboardPage from "../pages/Leaderboard";
import Layout from "../components/Layout";

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
    ],
  },
]);
export default router;
