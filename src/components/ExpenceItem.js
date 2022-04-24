import "./ExpenceItem.css";

function ExpenceItem (){
  const expenseDate =  new Date(2021, 2, 30);
  const expenseTitle = "Jacket";
  const expenseAmount = 300;

  return ( 
      <div className="expense-item">
        <div className="">{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">£{expenseAmount}</div>
        </div>
      </div>
  );
}



export default ExpenceItem;