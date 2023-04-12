import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Advert.module.css";
import advertJPG from "../../images/MOBILE/image-best-gear.jpg";

export default function Advert() {
  const location = useLocation();
  return (
    <div
      style={{ display: location.pathname === "/checkout" ? "none" : "" }}
      className={classes.advert}
    >
      <img src={advertJPG} alt="advert"></img>
      <div className={classes.description}>
        <h3>
          BRINGING YOU THE <span>BEST</span> AUDIO GEAR
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
