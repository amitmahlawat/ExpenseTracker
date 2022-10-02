import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const[isEditing,setIsEditing]=useState(false)
    const onSaveExpenseDataHandler=(EnteredExpenseData)=>{
        
        const expenseData={
            ...EnteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandler=()=>{
        setIsEditing(true)
    };
    const stopEditingHandler=()=>{
        setIsEditing(false)
    }


    return (
        <div className='new-expense'>
     {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        
        </div>
        
    )

};

export default NewExpense;