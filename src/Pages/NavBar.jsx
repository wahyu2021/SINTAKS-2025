import React from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100/40 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>

            {/* view in mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className="font-bold" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-bold" to={"/about"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="font-bold" to={"/product"}>
                  Coffee Product
                </Link>
              </li>
              <li>
                <Link className="font-bold" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <FaCoffee className="text-3xl text-amber-7np00" /> Aroma Sriwijaya
          </Link>
        </div>

        {/* view in desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-md px-1">
            <li>
              <Link className="font-semibold" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold" to={"/about"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="font-semibold" to={"/product"}>
                Coffee Product
              </Link>
            </li>
            <li>
              <Link className="font-semibold" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <Link className="btn btn-outline border-gray-300 mr-4">Request a Quote</Link>
          <Link className="btn bg-amber-600 hover:bg-amber-700 rounded-lg mr-8 shadow border-amber-600 hover:border-amber-700 text-gray-50">Contact Us</Link>
        </div>
      </div>

      {/* Tambahkan padding top agar konten tidak tertutup navbar */}
      {/* <div className="h-16" /> padding spacer */}
    </>
  );
}

export default Navbar;
