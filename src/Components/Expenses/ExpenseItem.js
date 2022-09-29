
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card';  
import React,{useState} from 'react';

const ExpenseItem=(props) =>{
  const [Title,setTtile]=useState(props.Title );
  
  

  const clickHandler=()=>{
    setTtile('Updated!');
    console.log(Title);
  }
 
 
 
  
  return ( 
    


    <Card className="expense-item">
        
        {/* {React.createElement(ExpenseDate,{Date:props.Date})} */}
        
        <ExpenseDate Date={props.Date}/>
      <div className="expense-item__descritipn">
      
        <h2>{Title}</h2>
        </div>
      <ExpenseDetails Amount={props.Amount}/>
      {/* {React.createElement(ExpenseDetails,{Amount:props.Amount})} */}
      
      
        
        {/* <div className="expense-item__price">${props.Amount}</div> */}
        {/* <div className="expense-item__description ">{props.Location}</div> */}
        <button onClick={clickHandler}>change title</button>
        
      </Card >
    
  );
}

export default ExpenseItem;
