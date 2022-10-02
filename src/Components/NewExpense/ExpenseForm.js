import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props  )=>{
    const[EnteredTitle,setEnteredTitle]=useState();
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const[EnteredAmount,setEnteredAmount]=useState();
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const[EnteredDate,setEnteredDate]=useState();
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    const expenseData={
        title:EnteredTitle,
        amount:EnteredAmount,
        date:new Date(EnteredDate)
    }

    const submitHandeler=(event)=>{
        event.preventDefault();
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");


    }

    
    return <form onSubmit={submitHandeler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <lable>Title</lable>
                <input type="text" value={EnteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <lable>Amount</lable>
                <input type="number" min='0.01' step='0.01' value={EnteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <lable>Date</lable>
                <input type="date" mi="2019-01-01"  max="2022-12-31" value={EnteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="expense-item__actions">
            <button onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm