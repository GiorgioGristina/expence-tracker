import { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false)

  function expenseDataHandler(enteredExpenseData){
    const expenseData ={
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    // console.log(expenseData);
    props.onAddExpense(expenseData)
    setShowForm(false)
  }

  function showFormClickHandler(){
    setShowForm(true)
  }

  function closeFormClickHandler(){
    setShowForm(false)
  }

  let displayform = <button type="button" onClick={showFormClickHandler}>Add new expense</button>

  if (showForm) {
    displayform = <ExpenseForm onSaveExpenseData={expenseDataHandler} closeForm={closeFormClickHandler} />
  }

  return(
    <div className="new-expense">
      {displayform }      
    </div>
  )
}

export default NewExpense