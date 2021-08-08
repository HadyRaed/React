import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle ("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div class="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
