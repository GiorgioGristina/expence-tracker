import { useState } from "react";
import Card from "../UI/Card";
import ExpenceItem from "./ExpenceItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props){
  
  const [year, setYear] = useState('all')

  function filterChangeHandler(yearselected){
    setYear(yearselected)
  }
  // console.log(year);
  const filteredExpenses = props.allExpenses.filter( expense => {
    if (year === "all") {
      return expense
    }
    return expense.date.getFullYear().toString() === year
  })

 
  // console.log(year);
  return(
  
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    
  );
}


export default Expenses