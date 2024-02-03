import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Clock from "@/utility/Clock";
const DashboardLayout = () => {
  const location = useLocation();
  //   console.log(location.pathname.split("/").slice(1).join(">"));
  return (
    <div className="grid grid-cols-12 ">
      <div className={`col-span-2 `}>
        <Sidebar />
      </div>

      <div className="col-span-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold my-4">
            {" "}
            {location.pathname.split("/").slice(1).join(" > ").toUpperCase()}
          </h1>
          <Clock />
        </div>
        <hr className="border-2" />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
