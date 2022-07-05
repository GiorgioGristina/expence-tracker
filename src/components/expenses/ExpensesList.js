import ExpenceItem from "./ExpenceItem"
import "./ExpensesList.css"

function ExpensesList(props){ 

  if (props.items.length === 0) {
   return <h2 className="expenses-list__fallback">expenses not found.</h2>
  }

  return <ul className="expenses-list">
    {props.items.map(expense => {
      
      return <ExpenceItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
    })}
  </ul>
}

export default ExpensesList