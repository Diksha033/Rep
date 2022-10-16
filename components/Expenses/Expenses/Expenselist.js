import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenselist.css';

const Expenselist = props =>{
//let expensesContent = <p>No expense found</p>;
if(props.items.length === 0) {
    return <h2 class='expense-list__fallback'>Found no expenses</h2>;
}
    return <ul class="expense-list">
{props.items.map((expenses) => (
    <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
    />
))};
    </ul>
    };
export default Expenselist;