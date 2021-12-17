import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // variabel for this component
  // first element : current state value
  // second element : function to update that state
  const [title, setTitle] = useState(props.title);

  // method for this component
  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    // this className in Card Components read as Props
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
