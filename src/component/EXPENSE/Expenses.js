import React from "react";

import "./Expenses.css";

import ExpenseItems from "./ExpenseItems";

import Card from "../UI/Card";

const Expenses = (props) => {


  return (
    <Card className="expenses">
      {props.items.map((expense,index) => (
        <ExpenseItems
           key={index}
          date={expense?.date}
          title={expense?.title}
          price={expense?.price} 
        />
      ))}
    </Card>
  );
};

export default Expenses;
