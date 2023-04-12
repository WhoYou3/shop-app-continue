import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSubmitAvaliable } from "../../store/SubmitFormSlice";
import useInput from "../../hooks/use-input";
import classes from "./Form.module.css";

export default function Form() {
  const dispatch = useDispatch();
  const {
    isValid: enteredNameIsValid,
    hasError: hasNameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((enteredNameValue) => enteredNameValue.trim() !== "");

  const {
    isValid: enteredEmailIsValid,
    hasError: hasEmailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((enteredEmailAddres) => enteredEmailAddres.includes("@"));

  const {
    isValid: enteredPhoneNumberIsValid,
    hasError: hasPhoneError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput((enteredPhoneNumber) => enteredPhoneNumber.length === 9);

  const {
    isValid: enteredAddresIsValid,
    hasError: hasAddresError,
    valueChangeHandler: addresChangeHandler,
    inputBlurHandler: addresBlurHandler,
  } = useInput((enteredAddresValue) => enteredAddresValue.trim() !== "");
  const {
    isValid: eneteredZIPisValid,
    hasError: hasZIPError,
    valueChangeHandler: zipChangeHandler,
    inputBlurHandler: zipBlurHandler,
  } = useInput((enteredZIP) => enteredZIP.length === 5);
  const {
    isValid: enteredCityIsValid,
    hasError: hasCityError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput((enteredCity) => enteredCity.trim() !== "");
  const {
    isValid: enteredCountryIsValid,
    hasError: hasCountryError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput((enteredCountry) => enteredCountry.trim() !== "");

  let formIsValid = false;

  dispatch(setSubmitAvaliable(formIsValid));

  if (
    enteredNameIsValid &&
    enteredCountryIsValid &&
    enteredCityIsValid &&
    eneteredZIPisValid &&
    enteredEmailIsValid &&
    enteredPhoneNumberIsValid &&
    enteredAddresIsValid
  ) {
    formIsValid = true;
    dispatch(setSubmitAvaliable(formIsValid));
  }

  return (
    <>
      <div className={classes.checkoutContainer}>
        <div className={classes.formContainer}>
          <Link to="/">Go Back</Link>
          <h3>CHECKOUT</h3>
          <form>
            <div className={classes.description}>
              <p>BILING DETAILS</p>
              <div className={classes.inputContainer}>
                <label for="name">Name</label>
                <input
                  id="name"
                  type="name"
                  style={{ border: hasNameError ? "1px red solid" : null }}
                  onBlur={nameBlurHandler}
                  onChange={nameChangeHandler}
                  placeholder="Alexei Ward"
                ></input>
                {hasNameError ? (
                  <p style={{ color: "red" }}>Field cant be empty</p>
                ) : null}
              </div>
              <div className={classes.inputContainer}>
                <label for="email">Email Addres</label>
                <input
                  id="email"
                  type="email"
                  style={{ border: hasEmailError ? "1px red solid" : null }}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  placeholder="alexei@mail.com"
                ></input>
                {hasEmailError ? (
                  <p style={{ color: "red" }}>write valid email</p>
                ) : (
                  ""
                )}
              </div>
              <div className={classes.inputContainer}>
                <label for="phone">Phone number</label>
                <input
                  id="phone"
                  style={{ border: hasPhoneError ? "1px red solid" : null }}
                  onBlur={phoneBlurHandler}
                  onChange={phoneChangeHandler}
                  type="number"
                  placeholder="444232324"
                ></input>
                {hasPhoneError ? (
                  <p style={{ color: "red" }}>write valid phone number</p>
                ) : null}
              </div>
            </div>
            <div>
              <div className={classes.description}>
                <p>SHIPPING INFO</p>
                <div className={classes.inputContainer}>
                  <label for="addres">Your addres</label>
                  <input
                    id="addres"
                    style={{ border: hasAddresError ? "1px red solid" : null }}
                    onBlur={addresBlurHandler}
                    onChange={addresChangeHandler}
                    className={classes.addres}
                    placeholder="1-go Maja 100"
                  ></input>
                  {hasAddresError ? (
                    <p style={{ color: "red" }}>write valid addres</p>
                  ) : null}
                </div>
                <div className={classes.inputContainer}>
                  <label for="zipcode">ZIP CODE</label>
                  <input
                    id="zipcode"
                    style={{ border: hasZIPError ? "1px red solid" : null }}
                    type="number"
                    onBlur={zipBlurHandler}
                    onChange={zipChangeHandler}
                    placeholder="32440"
                  ></input>
                  {hasZIPError ? (
                    <p style={{ color: "red" }}>Write valid ZIP CODE</p>
                  ) : null}
                </div>
                <div className={classes.inputContainer}>
                  <label for="city">City</label>

                  <input
                    id="city"
                    style={{ border: hasCityError ? "1px red solid" : null }}
                    onBlur={cityBlurHandler}
                    onChange={cityChangeHandler}
                    placeholder="New York"
                  ></input>
                  {hasCityError ? (
                    <p style={{ color: "red" }}>Write valid city</p>
                  ) : null}
                </div>
                <div className={classes.inputContainer}>
                  <label for="country">Country</label>
                  <input
                    id="country"
                    style={{ border: hasCountryError ? "1px red solid" : null }}
                    onBlur={countryBlurHandler}
                    onChange={countryChangeHandler}
                    placeholder="Poland"
                  ></input>
                  {hasCountryError ? (
                    <p style={{ color: "red" }}>Write valid country</p>
                  ) : null}
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
    </>
  );
}
