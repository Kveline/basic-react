import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  // for your name
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  // for street
  const {
    value: enteredStreet,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput((value) => value.trim() !== "");

  // postal code
  const {
    value: enteredPostalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
  } = useInput((value) => value.trim() !== "");

  // for city
  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
    // reset
    resetName();
    resetStreet();
    resetPostalCode();
    resetCity();
  };
  // styling for validity
  const nameControlClasses = `${classes.control} ${
    nameHasError ? classes.invalid : ""
  }`;

  const streetControlClasses = `${classes.control} ${
    streetHasError ? classes.invalid : ""
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    postalCodeHasError ? classes.invalid : ""
  }`;

  const cityControlClasses = `${classes.control} ${
    cityHasError ? classes.invalid : ""
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className="error-text">First name must not be empty.</p>
        )}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetHasError && (
          <p className="error-text">Street must not be empty.</p>
        )}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {postalCodeHasError && (
          <p className="error-text">Postal Code must not be empty.</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityHasError && <p className="error-text">City must not be empty.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button
          disabled={!formIsValid}
          type="submit"
          className={classes.submit}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
