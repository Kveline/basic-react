import { useState } from "react";

const useInput = (validateValue) => {
  // value input
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouced] = useState(false);
  // value validity
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // input handler
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // blur handler
  const inputBlurHandler = (event) => {
    setIsTouced(true);
  };

  // reset form
  const reset = () => {
    setEnteredValue("");
    setIsTouced(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useInput;
