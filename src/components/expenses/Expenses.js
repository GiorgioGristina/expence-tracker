import { useState } from "react";
import Card from "../UI/Card";
import ExpenceItem from "./ExpenceItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

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

  let expenseContent = <p>no expence found...</p>

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map(expense => {
      
      return <ExpenceItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
    })
  }
  // console.log(year);
  return(
  
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        {expenseContent}
      </Card>
    
  );
}


export default Expenses