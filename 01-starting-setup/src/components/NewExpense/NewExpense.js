import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("In NewExpense.js: ", expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* onSaveExpanseData same as emit, from child to parent */}
      <ExpenseForm onSaveExpanseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
