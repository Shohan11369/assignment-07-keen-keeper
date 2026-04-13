import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome, MdHistory, MdBarChart } from "react-icons/md"; 

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 px-3 md:px-4 py-2 bg-[#2D4F44] text-white rounded-md"
      : "flex items-center gap-2 text-slate-500 hover:text-emerald-800 px-2 md:px-3 py-2 transition-all";

  return (
    <div className="container mx-auto navbar bg-base-100 border-b-2 border-gray-200 px-4 md:px-8 lg:px-12 py-3">

      {/* Logo */}
      <div className="flex-1">
        <NavLink to="/" className="text-xl md:text-2xl font-bold text-slate-800 cursor-pointer">
          Keen<span className="text-emerald-800">Keeper</span>
        </NavLink>
      </div>

      {/* Menu */}
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center gap-1 md:gap-2 lg:gap-4 px-1">

          <li>
            <NavLink to="/" className={linkClass}>
              <MdHome size={22} />
              <span className="font-medium text-sm md:text-base">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className={linkClass}>
              <MdHistory size={22} />
              <span className="font-medium text-sm md:text-base hidden sm:inline">Timeline</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/friends" className={linkClass}>
              <MdBarChart size={22} />
              <span className="font-medium text-sm md:text-base hidden sm:inline">Stats</span>
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
