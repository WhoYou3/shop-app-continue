import React from "react";
import { Outlet } from "react-router-dom";
import Advert from "../components/Footer/Advert";
import NavFooter from "../components/Footer/NavFooter";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.content}>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Advert />
        <NavFooter />
      </footer>
    </div>
  );
}

export default Layout;
