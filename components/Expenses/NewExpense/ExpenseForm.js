import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const[enteredTitle,setenteredTitle]= useState('');
    const[enteredAmount,setenteredAmount] = useState('');
    const[enteredDate,setenteredDate] = useState('');


    const titleChangeHandler=(event) => {
        setenteredTitle (event.target.value);
    };
    
    const amountChangeHandler=(event)=>{
        setenteredAmount (event.target.value);
    };
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    };
    const submitHandler=(event) =>{
        event.preventDefault();
    
        const expenseData ={
            title: enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate)
        };
//console.log(expenseData);
props.onSaveExpenseData(expenseData);
setenteredTitle('');
setenteredAmount('');
setenteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div class='new-expense__controls'>
                <div class='new-expense__control'>
                    <label>Title</label>
                    <input type='text' 
                    value={enteredTitle}
                    onChange={titleChangeHandler} />
                </div>
                <div class='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                    value={enteredAmount}
                     min="0.01" step="0.01" 
                 onChange={amountChangeHandler} />
                </div>
                <div class='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                    value={enteredDate}
                     min="2019-01-01" 
                     max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div class='new-expense__actions'>
 <button type="button" onClick={props.onCancel}> Cancel</button> 
<button type='submit'>Add Expense</button>
            </div>
        </form>
    );
 }
export default ExpenseForm;