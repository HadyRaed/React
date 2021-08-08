import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "House Insurance", amount: 123.31, date: new Date(2021, 1, 2) },
    { title: "Medical Insurance", amount: 241, date: new Date(2020, 12, 11) },
    { title: "Club Insurance", amount: 124.67, date: new Date(2021, 2, 15) },
  ];
  const addExpenseHandler=(expense)=>{

    console.log("App.js");
    console.log(expense);
}
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
