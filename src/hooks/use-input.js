import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEneteredValue] = useState("");
  const [isTouched, setIsTouched] = useState("");

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEneteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
