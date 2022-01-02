import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  // name input
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouced] = useState(false);
  // email input
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // name validity
  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // email validity
  let re = /\S+@\S+\.\S+/;
  const enteredEmailIsValid = re.test(enteredEmail);
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  // input handler
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // blur handler
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouced(true);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  // checking all input is valid
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  // submision handler
  const formSubmisionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouced(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    // reset form
    // nameInputRef.current.value = ""; => NOT IDEAL, DON'T MANIPULATE DOM
    setEnteredName("");
    setEnteredNameTouced(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  // styling for validity
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {emailInputIsValid && <p className="error-text">Email is Invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
