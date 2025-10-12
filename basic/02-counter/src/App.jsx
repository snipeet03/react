import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add } from 'resolve-url-loader/lib/position-algerbra'

function App() {
  const [count, setCount] = useState(0)


  let counter = 5;

  function addValue() { 
    setCount(count + 1); 

  }

  function removeValue() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : { counter } </h2>

      <button onClick={ addValue }>Add value </button>
      <br />
      <br />
      <button onClick = { removeValue}>Remove value </button>
    </>
  )
}

export default App
