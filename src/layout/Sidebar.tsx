import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-gray-500 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-5">
        <h1 className="text-center text-4xl text-white font-bold truncate ">
          Event <span className="text-blue-300">360</span>
        </h1>
        <hr />
        <NavLink
          to="/dashboard/service-list"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-gray-700 hover:text-white transition-all flex items-center gap-2",
              {
                "bg-gray-700 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate"> Our Service</span>
        </NavLink>
        <NavLink
          to="/dashboard/event-items"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-gray-700 hover:text-white transition-all flex items-center gap-2",
              {
                "bg-gray-700 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Event Items</span>
        </NavLink>
        <NavLink
          to="/dashboard/event-items"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-gray-700 hover:text-white transition-all flex items-center gap-2",
              {
                "bg-gray-700 text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
