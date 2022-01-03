import { useState } from "react";

const useInput = (validateValue) => {
  // value input
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  // value validity
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // input change handler
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // blur handler
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  // reset form
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
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