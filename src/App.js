
import React,{useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const InitialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
    
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:"Banalore"},
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 28),
    
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    
  },
  
];


function App() {
  const [expenses,SetExpenses]=useState(InitialExpenses);
  

  const addExpenseHandler=expense=>{
    
    SetExpenses((prevExpense)=>{
      return [expense,...prevExpense]})
  }

  return ( 
    <div>
  <NewExpense onAddExpense={addExpenseHandler}/>
    {/* React.createElement(Expenses,{itemexpenses})   */}
    <Expenses item={expenses}></Expenses>
    
    
    </div>
    

    

    // </div>
   
  )
    
  
}

export default App;
