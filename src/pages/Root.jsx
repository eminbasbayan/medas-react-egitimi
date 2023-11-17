import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const RootLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <div className="container mx-auto pt-32">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
