// import React,{ useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
//function  ExpenseItem(props){
//   const expenseDate = new Date(2022, 2, 26);
//   const expenseTitle = 'Car insurance';
//   const expenseAmount = 294.67;

// const month= props.date.toLocaleString('en-US',{month:'long'});
//   const year =  props.date.getFullYear();
//   const day =  props.date.toLocaleString('en-US', { day: '2-digit' });
const ExpenseItem =(props) => { 
  //  const [title, settitle] =useState(props.title);
  //let title= props.title;
  // const clickHandler= () =>{
  //  // title = 'Updated';
  //  settitle('Updated');
  //   console.log(title);  
  // };
     return (
      <li>
 <Card class='expense-item'>
  <ExpenseDate date={props.date}/>

   <div class="expense-item__description">
          <h2>{props.title}</h2>
          <div class="expense-item__price">${props.amount}</div>
   </div> 
   {/* <button> Change title </button> */}
</Card>
</li>
    );
  }

export default ExpenseItem;