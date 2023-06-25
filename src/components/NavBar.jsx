import React from "react";

const NavBar = () => {
  const navItems = (
    <>
      <li>
        {" "}
        <a href="">Home</a>{" "}
      </li>
      <li>
        <a href="">Let's Chats</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-50 opacity-70 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost  text-xl uppercase">Arefine29</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
