import "./ExpenseItems"

import "./ExpenseItems.css"
import "./ExpenseDate.css"


const ExpenseDate = (props) =>{
 
    const months = props.date.toLocaleString('default', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});
  return (  
  <div className="expense_Date">
        
    <div className="expense_Date_month">{months}</div>
    <div className="expense_Date_year">{year}</div>
    <div className="expense_Date_Day">{day}</div>
    </div>
  )
    

}


export default ExpenseDate;