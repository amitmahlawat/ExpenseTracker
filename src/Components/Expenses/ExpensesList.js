import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList=(props)=>{
    
   if(props.items.length===0){
    return <h2 className="expenses-list__fallback">No Expenses Found </h2>
   }
   if(props.items.length===1){
    return (
        <div>
            <h2 className="expenses-list__fallback">Only single Expense here....Please add more...</h2>
            <ul className="expenses-list">
            {props.items.map(i=>(
        <ExpenseItem
                key={i.id}
                Title={i.title}
                Amount={i.amount}
                Date={i.date}
              ></ExpenseItem>
              
      ))}
      </ul>
        </div>
    )
   }

      return <ul className="expenses-list">
            {props.items.map(i=>(
        <ExpenseItem
                key={i.id}
                Title={i.title}
                Amount={i.amount}
                Date={i.date}
              ></ExpenseItem>
              
      ))}
      </ul>
}


export default ExpensesList