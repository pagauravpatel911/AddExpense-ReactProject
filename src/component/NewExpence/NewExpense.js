import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
  const NewExpenseData = (ExpenseData) =>{
        let collectData = { 
          ...ExpenseData,
          id:Math.floor(Math.random()*9)
 
  }

     props.dataToExpense(collectData)

}
  return(
    <div className="new_expense">
   <ExpenseForm  ExpenseData ={NewExpenseData}/>
   </div>
  );
}

export default NewExpense;
