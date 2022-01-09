import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
//import {expenses} from '../App.js';
import ExpensesFilter from "./ExpensesFilters";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("in Expenses");
    console.log(selectedYear);
  };
const filteredExpenses=props.item.filter( expense => {
  return expense.date.getFullYear().toString()=== filteredYear;
})

let expensesContent=<p>No expenses found.</p>
if (filteredExpenses.length>0)
{
  expensesContent=filteredExpenses.map((ex) => (
    <ExpenseItem 
    key={ex.id}
    title={ex.title} 
    amount={ex.amount} 
    date={ex.date} />
  ))
}
  return (
    <div>
    
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        
          {expensesContent}
          
      </Card>
    </div>
  );
};

export default Expenses;
