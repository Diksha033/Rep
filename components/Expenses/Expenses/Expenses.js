import React, { useState } from 'react';
//import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
 import Expenselist from './Expenselist';
import './Expenselist.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredyear,setfilteredyear]=useState('2021');
    const filterChangehandler= (selectedyear) =>{
    setfilteredyear (selectedyear);
};
const filteredexpense= props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString() === filteredyear
});
// let contentExpense=<p>No expense found</p>
// if(filteredexpense.length>0){
//     contentExpense = 
//         filteredexpense.map((expenses) => (
//             <ExpenseItem
//                 key={expenses.id}
//                 title={expenses.title}
//                 amount={expenses.amount}
//                 date={expenses.date}
//             />
//         ))
//     }

    return (
        <div>
        <Card class='expenses'>
 <ExpensesFilter
  selected={filteredyear}
  onChangeFilter={filterChangehandler}/>
  <ExpensesChart expenses={filteredexpense}/>
 <Expenselist items={filteredexpense}/>
        </Card>
        </div>
    );
}

export default Expenses;