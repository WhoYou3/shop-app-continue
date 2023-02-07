import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidth as widthSetting } from "../store/ScreenWidthSlice";

import Advert from "../components/Footer/Advert";
import NavFooter from "../components/Footer/NavFooter";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Layout.module.css";

function Layout(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  dispatch(widthSetting(width));

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
