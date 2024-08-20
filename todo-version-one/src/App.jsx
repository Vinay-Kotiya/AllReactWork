import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Todoitems from '../components/todoitems';
import Addtodo from '../components/Addtodo';

function App() {
 const vinay=[
    {
      name:"Buy milk",
      dueDate:"14/08/2024",
    },
    {
      name:"Go to College",
      dueDate:"14/08/2024",
    },
    {
      name:"I am happy",
      dueDate:"14/08/2024",
    },
 ];

  return (
    <>
      <h1>Todo App</h1>
      <Addtodo></Addtodo>
      <Todoitems todoItems={vinay}></Todoitems>
    </>
  )
}

export default App
