import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">

      {/* 404 Text */}
      <h1 className="text-6xl md:text-8xl font-bold text-emerald-700">
        404
      </h1>

      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mt-4">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-slate-500 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-[#2D4F44] text-white rounded-md hover:bg-[#243f36] transition-all">
          ⬅ Back to Home
        </button>
      </Link>

    </div>
  );
};

export default NotFoundPage;
