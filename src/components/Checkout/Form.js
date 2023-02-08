import React from "react";
import { Link } from "react-router-dom";
import classes from "./Form.module.css";

export default function Form() {
  return (
    <div className={classes.checkoutContainer}>
      <div className={classes.formContainer}>
        <Link to="/">Go Back</Link>
        <h3>CHECKOUT</h3>
        <form>
          <div className={classes.description}>
            <p>BILING DETAILS</p>
            <div className={classes.inputContainer}>
              <label>Name</label>
              <input placeholder="Alexei Ward"></input>
            </div>
            <div className={classes.inputContainer}>
              <label>Email Addres</label>
              <input placeholder="alexei@mail.com"></input>
            </div>
            <div className={classes.inputContainer}>
              <label>Phone number</label>
              <input placeholder="12025550136"></input>
            </div>
          </div>
          <div>
            <div className={classes.description}>
              <p>SHIPPING INFO</p>
              <div className={classes.inputContainer}>
                <label>Your addres</label>
                <input className={classes.addres}></input>
              </div>
              <div className={classes.inputContainer}>
                <label>ZIP CODE</label>
                <input></input>
              </div>
              <div className={classes.inputContainer}>
                <label>City</label>
                <input></input>
              </div>
              <div className={classes.inputContainer}>
                <label>Country</label>
                <input></input>
              </div>
            </div>
          </div>
          <div>
            <p>PAYMENT DETAILS</p>
            <div className={classes.description}></div>
            <div className={classes.paymentMethod}>
              <input
                className={classes.checkBoxInput}
                type={"checkbox"}
              ></input>
              <p>e-Money</p>
            </div>
            <div className={classes.paymentMethod}>
              <input
                className={classes.checkBoxInput}
                type={"checkbox"}
              ></input>
              <p>Cash On Devilery</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
