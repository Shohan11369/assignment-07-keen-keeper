import { NavLink } from "react-router-dom";

const MyNavLink = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold transition pb-1 ${
          className || ""
        } ${
          isActive
            ? "bg-emerald-700 text-white border border-emerald-700"
            : " text-black border hover:text-emerald-700"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
