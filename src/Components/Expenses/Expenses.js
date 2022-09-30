import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(props) {
  const [FilteredYear, SetFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    SetFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={FilteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.map((i) => (
          <ExpenseItem
            key={i.id}
            Title={i.title}
            Amount={i.amount}
            Date={i.date}
          ></ExpenseItem>
        ))}

        {/* <ExpenseItem
        Title={props.item[0].title}
        Amount={props.item[0].amount}
        Date={props.item[0].date}
        Location={props.item[0].location}
      ></ExpenseItem>
      <ExpenseItem
        Title={props.item[1].title}
        Amount={props.item[1].amount}
        Date={props.item[1].date}
        Location={props.item[1].location}
      ></ExpenseItem>
      <ExpenseItem
        Title={props.item[2].title}
        Amount={props.item[2].amount}
        Date={props.item[2].date}
        Location={props.item[2].location}
      ></ExpenseItem>
      <ExpenseItem
        Title={props.item[3].title}
        Amount={props.item[3].amount}
        Date={props.item[3].date}
        Location={props.item[3].location}
      ></ExpenseItem>  */}
      </Card>
    </div>
  );
}

export default Expenses;
