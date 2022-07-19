import React,{useState} from "react";

import "./ExpenseForm.css"



const ExpenseForm = (props) =>{

    const [title,changeTitle] = useState("")
    const [amount,changeAmont] = useState("")
    const [date,changeDate] = useState("")

const changeTitleHandler = (event) =>{
     changeTitle(event.target.value)
}
const changeAmountHandler = (event) =>{
    changeAmont(event.target.value)
}
const changeDateHandler = (event) =>{

    changeDate(event.target.value)
    
}

const submitHandler = (event) =>{
    event.preventDefault() 
    const collectData = {
       title:title,
       price:amount,
       date:new Date(date)
    }
    changeTitle("")
    changeAmont("")
    changeDate("")
    props.ExpenseData(collectData) 

}

    return(
        <form onSubmit={submitHandler}>
    <div className="new_expense_control">
      <div className="new_expense_control">
        <label>Title</label>
        <input type="text" value={title} onChange={changeTitleHandler}/>
      </div>  <div className="new_expense_control">
        <label>price</label>
        <input type="number" value={amount} min="0.01" step="0.01" onChange={changeAmountHandler}/>
      </div>
      <div className="new_expense_control">
        <label>Date</label>
        <input type="date" value={date} onChange={changeDateHandler}/>
      </div>
    </div>
    <div className="new_expense_control_action">
        <button type="submit">Submit</button>
    </div>
    </form>
    )
}



export default ExpenseForm; 