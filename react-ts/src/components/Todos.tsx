import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          delete={() => todoCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
