import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <main className="page-wrapper">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
