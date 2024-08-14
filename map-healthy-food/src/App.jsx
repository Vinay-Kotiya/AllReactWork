import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Errormessage from './compo/Errormessage';
import Fooditems from './compo/Fooditems';

function App() {
  let fooditems=["Dal","Roti","Milk","Panir","Dahi"];
  // let fooditems=[];
//1
  //**condition rendering**
  // if(fooditems.length===0){
  //   return <h3>I am still Hungry.</h3>
  // }
//2
  // let emptymessage=fooditems.length===0?<h3>I am still Hungry.</h3>:null;
  return (
    <>
      <h1>Healthy Food</h1>
      {/*{emptymessage} */}
      <Errormessage items={fooditems}/>
      <Fooditems items={fooditems}/>
    </>
  )
}

export default App
