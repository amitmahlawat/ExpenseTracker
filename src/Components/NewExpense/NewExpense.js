import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const onSaveExpenseDataHandler=(EnteredExpenseData)=>{
        const expenseData={
            ...EnteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
        
    )

};

export default NewExpense;