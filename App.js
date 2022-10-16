import React,{useState} from 'react';
import './App.css';
//import ExpenseItem from './components/Expenses/Expenses/ExpenseItem';
 import Expenses from './components/Expenses/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
//import Card from './components/Expenses/Expenses/Card';
//import ExpensesFilter from './components/Expenses/Expenses/ExpensesFilter';
// function App() {


 const App=() => {
   const dummy_expenses = [
     { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), },
     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
     { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), },
     { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), },
   ]; 
 const[expenses,setexpenses]= useState(dummy_expenses);
  
  const addExpenseHandler =(expense)=>{
    const nexpense=[expense,...expenses]
      setexpenses(nexpense);
    };

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
  </div>
  );
  }
export default App;