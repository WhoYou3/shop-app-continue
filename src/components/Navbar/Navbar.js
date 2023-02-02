import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar(props) {
  const [isMenu, setIsMenu] = useState(false);
  let param = useParams();

  const showMenu = () => {
    setIsMenu(true);
  };

  return (
    <>
      <nav
        style={{ backgroundColor: param.products ? "black" : "" }}
        className={classes.navbar}
      >
        <RxHamburgerMenu
          className={classes.iconMenu}
          onClick={showMenu}
          size={"2rem"}
        />
        <h2>audiophile</h2>
        <FiShoppingCart className={classes.iconShop} size={"2rem"} />
      </nav>
      <div className={classes.breakline}></div>

      {isMenu && (
        <>
          <div onClick={() => setIsMenu(false)} className={classes.menu}>
            <AiOutlineClose size={"3rem"} className={classes.closeIcon} />
            <ul>
              <Link to="/">Home</Link>
              <Link to="/Headphones">Headphones</Link>
              <Link to="/Earphones">Earphones</Link>
              <Link to="/G">Głosniki</Link>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
