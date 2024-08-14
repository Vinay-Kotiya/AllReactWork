import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Todoitems from '../components/todoitems';
import Addtodo from '../components/Addtodo';

function App() {
 

  return (
    <>
      <h1>Todo App</h1>
      <Addtodo></Addtodo>
      <Todoitems></Todoitems>
    </>
  )
}

export default App
