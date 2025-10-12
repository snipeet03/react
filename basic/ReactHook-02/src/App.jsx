import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyComponent } from './MyComponent'
import { Counter } from './Counter'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      {/* <MyComponent></MyComponent> */}
      <Counter></Counter>
    </>
  )
}

export default App
