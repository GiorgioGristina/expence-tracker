import { useState } from "react";
import "./ExpenseForm.css"

function ExpenseForm(props){
  
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  })
  function titleChangeHandler(e) {
    setUserInput((oldInput) => {
      return {
      ...oldInput,
      enteredTitle: e.target.value
      }
    });
  }

  function amountChangeHandler(e) {
    setUserInput((oldInput) => {
      return {
      ...oldInput,
      enteredAmount: e.target.value
      }
    });
  }

  function dateChangeHandler(e) {
    setUserInput((oldInput) => {
      return {
      ...oldInput,
      enteredDate: e.target.value
      }
    });
  }


  function submitHandler(e){
    e.preventDefault()
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount, 
      date: new Date(userInput.enteredDate)
    }

    props.onSaveExpenseData(expenseData)
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: ""
    })
    
  
  }

 
  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__action">
      <button type="button" onClick={props.closeForm}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>

    </form>

  )
}

export default ExpenseForm