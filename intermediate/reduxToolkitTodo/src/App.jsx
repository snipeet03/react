import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {


  return (
    <>
     <h2>Learn about redux tooKit  </h2>
     <AddTodo />
     <Todo/>
    </>
  )
}

export default App
