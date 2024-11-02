import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto">
                <Navbar />
                <div className="h-[calc(100vh - 374px)]">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
