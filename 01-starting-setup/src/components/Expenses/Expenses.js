import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("in Expenses.js: ", selectedYear);
    setFilteredYear(selectedYear);
  };

  // filter the expenses data
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div className="wrap">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses} />
      {/* this attributes (title, amount, date) become a function parameter in ExpenseItem Called props */}
      {/* using rendreing list (v-for in Vue js) + with conditional content*/}
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
