import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Stdudents'
function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Student name = "Navneet " age = {34} isStudent = {true}></Student>
      <Student name = "Anita" age = {54} isStudent = {false} ></Student>
      <Student name = "SquidWord " age = {50} isStudent = {true}></Student>
      <Student name = "Sandy " age = {34} isStudent = {false}></Student>
      <Student name = "Larry" ></Student>
      </>
  )
}

export default App
