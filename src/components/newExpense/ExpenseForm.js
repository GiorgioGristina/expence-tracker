import "./ExpenseForm.css"

function ExpenseForm(){
  function titleOnChange() {
    console.log("title change");
  }
  return(
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleOnChange}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2022-12-31"/>
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add expense</button>
      </div>

    </form>

  )
}

export default ExpenseForm