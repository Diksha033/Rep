import React,{ useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const[isEditing,setisEditing]= useState(false);
  const SaveExpenseDatahandler = (enteredexpenseData) => {
        const expenseData={
            ...enteredexpenseData,
            id:Math.random().toString()
        };
     props.onAddExpense(expenseData);
       setisEditing(false);
    };
    const startEditingHandler =() => {
           setisEditing(true);
    };
    const stopEditingHandler = () =>{
          setisEditing(false);
     };
    return (
    <div class='new-expense'>
  
 {!isEditing && <button onClick={startEditingHandler}> Add New Expense</button> }
{isEditing && <ExpenseForm 
onSaveExpenseData={SaveExpenseDatahandler}
   onCancel={stopEditingHandler}/> }
    </div>
    );
 };
export default NewExpense;