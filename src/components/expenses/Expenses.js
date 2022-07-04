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

  console.log(year);
  return(
  
      <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        <ExpenceItem 
            title={props.allExpenses[0].title}
            amount={props.allExpenses[0].amount}
            date={props.allExpenses[0].date}
        ></ExpenceItem>  
        <ExpenceItem
            title={props.allExpenses[1].title}
            amount={props.allExpenses[1].amount}
            date={props.allExpenses[1].date}
        ></ExpenceItem>     
        <ExpenceItem
            title={props.allExpenses[2].title}
            amount={props.allExpenses[2].amount}
            date={props.allExpenses[2].date}
        ></ExpenceItem>     
        <ExpenceItem
            title={props.allExpenses[3].title}
            amount={props.allExpenses[3].amount}
            date={props.allExpenses[3].date}
        ></ExpenceItem> 
      </Card>
    
  );
}


export default Expenses