import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Errormessage from './compo/Errormessage';
import Fooditems from './compo/Fooditems';
import Container from './compo/Container';
import Wellbe from './compo/Wellbe';
import Foodinput from './compo/Foodinput';

function App() {
  let fooditems=["Dal","Roti","Milk","Panir","Dahi","Rotlo","Ragi Roti"];
  // let foodtitel=

    let textStateArr=useState("Food item to be add");
    let textToShow=textStateArr[0];
    let setTaxtState=textStateArr[1];
  const heandelrfoodinput=(event)=>{
    // console.log("input is give ");
    
    if(event.key==='Enter'){
      console.log(event.target.value);
    let newFoodItem=event.target.value;
     let newItems=[...fooditems,newFoodItem];
     setTaxtState(newItems);

    }
};
  return (
    <>
      <Container>
      <h1>Healthy Food</h1>
      {/*{emptymessage} */}
            <Errormessage items={fooditems}/>
            <Foodinput heandelrfoodinput={heandelrfoodinput}></Foodinput>
            <Fooditems items={fooditems} />
      </Container>
      <Container>
            <Wellbe items={fooditems}></Wellbe>
      </Container>
      <Container>
        <h1>Hi i am Vinay</h1>
      </Container>
      </>
  )
}

export default App
