import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Leftpart from './components/Leftpart'
import Rightpart from './components/Rightpart'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Rightpart></Rightpart>
      <Leftpart></Leftpart>
    </>
  )
}

export default App
