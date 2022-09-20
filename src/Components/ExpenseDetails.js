function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-item__price">${props.Amount}</div>
      <div className="expense-item__description"><h1>{props.Title}</h1></div>
        
      
    </div>
  );
}

export default ExpenseDetails;
