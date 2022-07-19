//import ExpenseItems from "./component/ExpenseItems";
import React, { useState, useEffect } from "react";
import Expenses from "./component/EXPENSE/Expenses";
import NewExpense from "./component/NewExpence/NewExpense";

let dummyItems = [];
const App = () => {
  const [Items, changeItems] = useState(dummyItems);

    function fetchData (){
      fetch("http://localhost:5000/getExpense")
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        console.log(data);
        changeItems(data.msg);
      })
      .catch((err) => {
        return err;
      });
    }
  useEffect(() => {
     fetchData()
  }, []);

  const dataFromExpense = (newExpense) => {
     
    fetch("http://localhost:5000/createExpense",{
      method:"POST",
      body:JSON.stringify(newExpense),
      headers:{
        "Content-Type":"application/json"
      }
    }).then((res)=>{
         fetchData()
    })


  };


  return (
    <div>
      <NewExpense dataToExpense={dataFromExpense}></NewExpense>
      <Expenses items={Items} />
    </div>
  );
};

export default App;
