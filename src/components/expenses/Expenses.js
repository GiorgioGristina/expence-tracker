import { useState } from "react";
import Card from "../UI/Card";
import ExpenceItem from "./ExpenceItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
  
  const [year, setYear] = useState('')

  function filterChangeHandler(yearselected){
    setYear(yearselected)
  }

  const filteredExpenses = props.allExpenses.filter( expense => {
    if (year === "") {
      return expense
    }
    return expense.date.getFullYear().toString() === year
  })

  // console.log(year);
  return(
  
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map(expense => {
          console.log(expense);
          return <ExpenceItem 
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    />
        })}
      </Card>
    
  );
}


export default Expenses