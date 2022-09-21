

function ExpenseDetails(props) {
  return (
    <div>
        
      <div className="expense-item__price">${props.Amount}</div>
      <div className="expense-item"><h2>{props.Location}</h2></div>
      
        
      
    </div>
  );
}

export default ExpenseDetails;
