import Expenses from "./components/Expenses/Expenses";
// using arrow
const App = () => {
  const expenses = [
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
      date: new Date(2021, 7, 12),
    },
    {
      id: "e3",
      title: "Car Insurance 2",
      amount: 293.12,
      date: new Date(2021, 6, 12),
    },
    {
      id: "e4",
      title: "Car Fixing",
      amount: 591.12,
      date: new Date(2021, 4, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {/* this attributes (title, amount, date) become a function parameter in ExpenseItem Called props */}
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
