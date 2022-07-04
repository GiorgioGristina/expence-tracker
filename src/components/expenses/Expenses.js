import Card from "../UI/Card";
import ExpenceItem from "./ExpenceItem";
import "./Expenses.css"

function Expenses(props){
  // console.log(props.allExpenses);
  return(
    <Card className="expenses">
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