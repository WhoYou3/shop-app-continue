import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavFooter.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";

export default function NavFooter() {
  return (
    <div className={classes.navFooterContainer}>
      <div className={classes.navFooter}>
        <h2>audiophile</h2>
        <ul>
          <li>
            <NavLink>HOME</NavLink>
          </li>
          <li>
            <NavLink>HEADPHONES</NavLink>
          </li>
          <li>
            <NavLink>SPEAKERS</NavLink>
          </li>
          <li>
            <NavLink>EARPHONES</NavLink>
          </li>
        </ul>
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
        <div className={classes.iconsContainer}>
          <AiFillFacebook size={"2rem"} />
          <AiOutlineInstagram size={"2rem"} />
          <CiTwitter size={"2rem"} />
        </div>
      </div>
    </div>
  );
}
