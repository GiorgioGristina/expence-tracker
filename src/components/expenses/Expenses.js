import { useState } from "react";
import Card from "../UI/Card";
import ExpenceItem from "./ExpenceItem";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){
  
  const [year, setYear] = useState('2022')

  function filterChangeHandler(yearselected){
    setYear(yearselected)
  }

  
  // console.log(year);
  return(
  
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        {props.allExpenses.map(expense => {
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