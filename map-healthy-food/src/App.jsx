import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Errormessage from './compo/Errormessage';
import Fooditems from './compo/Fooditems';
import Container from './compo/Container';
import Wellbe from './compo/Wellbe';

function App() {
  let fooditems=["Dal","Roti","Milk","Panir","Dahi","Rotlo","Ragi Roti"];
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
      <Container>
      <h1>Healthy Food</h1>
      {/*{emptymessage} */}
            <Errormessage items={fooditems}/>
            <Fooditems items={fooditems}/>
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
