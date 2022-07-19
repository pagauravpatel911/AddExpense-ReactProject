


import React from "react";
import "./ExpenseItems.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

const ExpenseItems = (props) =>{
    

    

    return (

            <Card className="expense_items">
             <ExpenseDate date={new Date(props.date)}/>
            <div className="expense_items_description">
                <h2>{props.title}</h2>
                <div className="expense_items_price">${props.price}</div>
            </div>
      
        </Card>
    )

}



export default ExpenseItems

