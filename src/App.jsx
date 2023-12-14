import { useState } from 'react'
import chickenData from '../chickenTab.json'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ChickenCard from './components/ChickenCard'
import Teacher from './components/Teacher'
import Student from './components/Student'


function App() {
  const chickenTab = chickenData.chickenTab
  const selectedChicken = chickenTab[0]
  console.log(selectedChicken);

  return (
    <>
      <NavBar/>
      <div id='Teacher'>
        <h2>Equipe pédagogique</h2>
        <Teacher chickenTab={chickenTab}/>
      </div>
      <div id="Student">
        <h2>Camarades</h2>
        <Student chickenTab={chickenTab}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
