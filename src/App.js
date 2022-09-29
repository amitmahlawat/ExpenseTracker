import { useState } from 'react';
import React from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:"gurgaon"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:"Banalore"},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:"Noida"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"Delhi"
    },
    
  ];

  const [items,setItems]=useState(expenses);

  const addExpenseHandler=expense=>{
    console.log('in app js')
    console.log(expense)
    setItems([...items,expense])
  }

  return ( 
    <div>
  <NewExpense onAddExpense={addExpenseHandler}/>
    {/* React.createElement(Expenses,{itemexpenses})   */}
    <Expenses item={items}></Expenses>
    
    
    </div>
    

    

    // </div>
   
  )
    
  
}

export default App;
