import React from "react";
import Button from "../UI/Button";
import classes from "./SectionMain.module.css";

function SectionMain() {
  return (
    <>
      <section className={classes.sectionMain}>
        <div className={classes.description}>
          <h3>NEW PRODUCT</h3>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>
            Experience natural, lifelike audio and exceptional bulid quality
            made for the passionate music
          </p>
        </div>
      </section>

      <div className={classes.container}>
        <Button navigate="/headphones/XX99MARKII" />
      </div>
    </>
  );
}

export default SectionMain;
