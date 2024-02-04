import App from "@/App";
import DashboardLayout from "@/layout/DashboardLayout";
import EventItemList from "@/pages/dashboard/eventItems/EventItemList";
import OurServiceList from "@/pages/dashboard/OurServiceList";
import Home from "@/pages/home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/service-list" />,
      },
      {
        path: "service-list",
        element: <OurServiceList />,
      },
      {
        path: "event-items",
        element: <EventItemList />,
      },
    ],
  },
]);

export default router;
