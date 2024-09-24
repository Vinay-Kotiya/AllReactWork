import { useState } from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Todoitems from '../components/todoitems';
import Addtodo from '../components/Addtodo';
import WelcomeMessage from '../components/Welcomemessage';


function App() {
  const [newTodo,setNewTodo]=useState([ ]);
//  const vinay=[
    // {
    //   name:"Buy milk",
    //   dueDate:"14/08/2024",
    // },
//     {
//       name:"Go to College",
//       dueDate:"14/08/2024",
//     },
//     {
//       name:"I am happy",
//       dueDate:"14/08/2024",
//     },
//  ];
  const onClickHendler=(inputText,inputDate)=>{
    // console.log(inputText);
    // console.log(inputDate);
    // console.log( inputText + inputDate);
    var tempTodo=[...newTodo,{name:inputText,dueDate:inputDate}];
    setNewTodo(tempTodo);
  }
  const deleteHendler=(todoItemName)=>{
    // alert("delete Button clicked")
    const tempTodo=newTodo.filter((item)=>item.name!==todoItemName);
    setNewTodo(tempTodo);


  }
  return (
    <>
      <h1>Todo App</h1>
      <Addtodo onClickHendler={onClickHendler}></Addtodo>
      {newTodo.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <Todoitems todoItems={newTodo} deleteHendler={deleteHendler}></Todoitems>
    </>
  )
}

export default App
