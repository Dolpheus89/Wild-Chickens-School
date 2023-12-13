import { useState } from 'react'
import chikenTab from './components/ChickenTab'
import './App.css'

console.log(chikenTab);

function App() {
const chicken = chikenTab[13]

  return (
    <>
    <img src={chicken.imgSrc} alt="" />
    </>
  )
}

export default App
