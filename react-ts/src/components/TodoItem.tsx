import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  delete: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={() => props.delete()}>
      {props.text}
    </li>
  );
};

export default TodoItem;
