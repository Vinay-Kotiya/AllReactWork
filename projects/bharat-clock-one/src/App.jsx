import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/heading';
import Slogan from './components/slogan';
import Currenttime from './components/currenttime';

function App() {
  

  return (
    <>
    <center>
      <Heading></Heading>
      <Slogan></Slogan>
      <Currenttime></Currenttime>
      </center>
    </>
  )
}

export default App
