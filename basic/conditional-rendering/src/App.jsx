import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserGreeting from './UserGreeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <UserGreeting isLoggedIn = {true} username = "sdsd" >  </UserGreeting>
        <UserGreeting></UserGreeting>
    </>
  )
}

export default App
