import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <img
                width="100"
                height="100"
                src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/64/external-page-not-found-big-data-2-kmg-design-outline-color-kmg-design.png"
                alt="external-page-not-found-big-data-2-kmg-design-outline-color-kmg-design"
            />
            <h2 className="text-5xl">Page not found!</h2>
            <p className="text-2xl">Status: Error-404</p>
            <Link to={"/"} className="hover:text-[#23BE0A]">
                Go to home
            </Link>
        </div>
    );
};

export default ErrorPage;
