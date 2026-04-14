import React from "react";
import { NavLink } from "react-router-dom";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 border-b-2 border-gray-200 px-4 md:px-8 lg:px-12 py-3">
      {/* Logo */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="text-xl md:text-2xl font-bold text-slate-800 cursor-pointer"
        >
          Keen<span className="text-emerald-800">Keeper</span>
        </NavLink>
      </div>

      {/* Menu */}
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center gap-1 md:gap-2 lg:gap-4 px-1">
          <li>
            <MyNavLink to="/">Home</MyNavLink>
          </li>

          <li>
            <MyNavLink to="/timeline">Timeline</MyNavLink>
          </li>

          <li>
            <MyNavLink to="/stars">Stars</MyNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
