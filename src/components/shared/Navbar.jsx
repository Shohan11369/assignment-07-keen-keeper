import React from "react";
import { NavLink } from "react-router-dom";
import MyNavLink from "./MyNavLink";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="container mx-auto navbar bg-base-100 border-b-2 border-gray-200 px-4 md:px-8 lg:px-12 py-3">
      {/* Logo */}
      <div className="flex-1 hidden md:block">
        <NavLink
          to="/"
          className="text-xl md:text-2xl font-bold text-slate-800 cursor-pointer"
        >
          Keen<span className="text-emerald-800">Keeper</span>
        </NavLink>
      </div>

      {/* Menu */}
      <div className="flex-none md:flex-none flex justify-center w-full md:w-auto">
        <ul className="menu menu-horizontal items-center gap-2 md:gap-1 lg:gap-4 px-1">
          <li>
            <MyNavLink to="/">
              <FaHome />
              Home
            </MyNavLink>
          </li>

          <li>
            <MyNavLink to="/timeline">
              <RiTimeLine />
              Timeline
            </MyNavLink>
          </li>

          <li>
            <MyNavLink to="/stars">
              <BsGraphUpArrow />
              Stars
            </MyNavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
