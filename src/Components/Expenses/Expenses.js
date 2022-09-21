import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.item.map((i) => (
        <ExpenseItem
          Title={i.title}
          Amount={i.amount}
          Date={i.date}
          Location={i.location}
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
  );
}

export default Expenses;
