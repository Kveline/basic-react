import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }

  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }

  if (action.type === "RESET") {
    return initialState;
  }

  return initialState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  // value validity
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  // input change handler
  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  // reset change handler
  const inputBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  // blur change handler
  const resetHandler = (event) => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler: valueChangeHandler,
    inputBlurHandler: inputBlurHandler,
    reset: resetHandler,
  };
};

export default useInput;
