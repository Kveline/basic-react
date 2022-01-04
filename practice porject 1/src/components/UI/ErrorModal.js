import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import React, { Fragment } from "react";

const ErrorModal = (props) => {
  const closeModal = () => {
    props.onCloseModal();
  };

  return (
    <Fragment>
      <div className={classes.backdrop}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={closeModal}>Okay</Button>
          </footer>
        </Card>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
