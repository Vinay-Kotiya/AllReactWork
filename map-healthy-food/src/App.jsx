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
  // let fooditems=["Dahi","Rotlo","Ragi Roti"];

    let [fooditems,setFoodItem]=useState(["Dahi","Rotlo","Ragi Roti"]);
   
  const heandelrfoodinput=(event)=>{
    // console.log("input is give ");
    // if(event.target.value>=1){
    if(event.key==='Enter'){
      // console.log(length(event.target.value));
      console.log(event.target.value);
    let newFoodItem=event.target.value;
    event.target.value="";
     let newItems=[...fooditems,newFoodItem];
     setFoodItem(newItems);
      }
    // }
};
  return (
    <>
      <Container>
      <h1>Healthy Food</h1>
      {/*{emptymessage} */}
            
            <Foodinput heandelrfoodinput={heandelrfoodinput}></Foodinput>
            <Errormessage items={fooditems}/>
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
