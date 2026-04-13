import React from "react";
import { MdHome, MdHistory, MdBarChart } from "react-icons/md"; 

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 border-[#3b82f6] px-4 md:px-8 lg:px-12 py-3">
      {/* Logo Section */}
      <div className="flex-1">
        <a className="text-xl md:text-2xl font-bold text-slate-800 cursor-pointer">
          Keen<span className="text-emerald-800">Keeper</span>
        </a>
      </div>

      {/* Menu Section */}
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center gap-1 md:gap-2 lg:gap-4 px-1">
          {/* Home Link */}
          <li>
            <button className="flex flex-row items-center gap-2 px-3 md:px-4 py-2 bg-[#2D4F44] text-white rounded-md hover:bg-[#243f36] transition-all">
              <MdHome size={22} />
              <span className="font-medium text-sm md:text-base">Home</span>
            </button>
          </li>

          {/* Timeline Link */}
          <li>
            <button className="flex flex-row items-center gap-2 text-slate-500 hover:text-emerald-800 px-2 md:px-3 py-2 transition-all">
              <MdHistory size={22} />
              
              <span className="font-medium text-sm md:text-base hidden sm:inline">Timeline</span>
            </button>
          </li>

          {/* Stats Link */}
          <li>
            <button className="flex flex-row items-center gap-2 text-slate-500 hover:text-emerald-800 px-2 md:px-3 py-2 transition-all">
              <MdBarChart size={22} />
              <span className="font-medium text-sm md:text-base hidden sm:inline">Stats</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;