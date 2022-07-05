// import { useCallback } from "react/cjs/react.production.min";
import ExpenseDate from "./ExpenseDate";
// import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenceItem.css";

function ExpenceItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div className="">
          <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenceItem;
