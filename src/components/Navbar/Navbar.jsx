import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        `px-4 py-2 ${
                            isActive
                                ? "text-[#23BE0A] border rounded-lg border-[#23BE0A]"
                                : "text-[#131313CC] border-none"
                        }`
                    }
                    to={"/"}
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    className={({ isActive }) =>
                        `px-4 py-2 ${
                            isActive
                                ? "text-[#23BE0A] border rounded-lg border-[#23BE0A]"
                                : "text-[#131313CC] border-none"
                        }`
                    }
                    to={"listedbooks"}
                >
                    Listed Books
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        `px-4 py-2 ${
                            isActive
                                ? "text-[#23BE0A] border rounded-lg border-[#23BE0A]"
                                : "text-[#131313CC] border-none"
                        }`
                    }
                    to={"dashboard"}
                >
                    Pages to Read
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="py-8 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
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
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <p className="text-3xl font-bold font-work-sans">Book Vibe</p>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="flex items-center gap-4">{links}</ul>
            </div>
            <div className="flex items-center gap-4 navbar-end">
                <a className="bg-[#23BE0A] px-4 py-2 rounded-lg text-white font-work-sans font-semibold cursor-pointer">
                    Sign In
                </a>
                <a className="bg-[#59C6D2] px-4 py-2 rounded-lg text-white font-work-sans font-semibold cursor-pointer">
                    Sign Up
                </a>
            </div>
        </div>
    );
};

export default Navbar;
