import React, { useState } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar(props) {
  const [isMenu, setIsMenu] = useState(false);
  let param = useParams();
  const widthChecker = useSelector((state) => state.width.value);

  const showMenu = () => {
    setIsMenu(true);
  };

  return (
    <>
      <nav
        style={{ backgroundColor: param.products ? "black" : "" }}
        className={classes.navbar}
      >
        {widthChecker < 1024 ? (
          <RxHamburgerMenu
            className={classes.iconMenu}
            onClick={showMenu}
            size={"2rem"}
          />
        ) : (
          <ul className={classes.navLinks}>
            <li>
              <NavLink
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                to="/"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                to="/headphones"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                HEADPHONES
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                to="/speakers"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                SPEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                to="/earphones"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
        )}

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
