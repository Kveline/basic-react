import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 291.12,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e2",
    title: "Car Insurance 1",
    amount: 221.12,
    date: new Date(2020, 7, 12),
  },
  {
    id: "e3",
    title: "Car Insurance 2",
    amount: 293.12,
    date: new Date(2019, 6, 12),
  },
  {
    id: "e4",
    title: "Car Fixing",
    amount: 591.12,
    date: new Date(2020, 4, 12),
  },
];

// using arrow
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("In App.js: ", expense);
    // add it to our expenses array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* onAddExpense same as emit, from child to parent */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {/* this attributes (title, amount, date) become a function parameter in ExpenseItem Called props */}
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
