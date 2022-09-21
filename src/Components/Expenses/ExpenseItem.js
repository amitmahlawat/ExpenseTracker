
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card';  
import React from 'react';

function ExpenseItem(props) {
 
  
  return ( 


    <Card className="expense-item">
        
      
      {/* <ExpenseDate Date={props.Date}/> */}
      <div className="expense-item__descritipn"><h2>{props.Title}</h2></div>
      <ExpenseDetails Amount={props.Amount} Location={props.Location}/>
      
      
        
        {/* <div className="expense-item__price">${props.Amount}</div> */}
        {/* <div className="expense-item__description ">{props.Location}</div> */}
      </Card >
    
  );
}

export default ExpenseItem;
