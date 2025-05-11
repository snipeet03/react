import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'
import PropsTypes from "prop-types" 


function App() {
  const [count, setCount] = useState(0)


  const fruits = [
		{
			id : 1,
			name : "apple", 
			calorie : 95
		},

		{
			id:2,
			name : "orange", 
			calorie : 45
		}, 
		{
			id:3,
			name : "banana",
			calorie : 105
		},
		{

			id:4,
			name : "Coconut", 
			calorie : 159 
		}
	]

  const vegetable = [
		{
			id : 6,
			name : "potatos", 
			calorie : 95
		},

		{
			id:7,
			name : "onion", 
			calorie : 45
		}, 
		{
			id:8,
			name : "bringle",
			calorie : 105
		},
		{

			id:9,
			name : "Cucumber", 
			calorie : 159 
		}
	]
  return (
    <>
      <List items = {fruits} categorie = "Frutis"></List>
      <List  items = {vegetable} categorie = "Vegetable" ></List>
      <List></List>
    </>
  )
}

List.defaultProps = {
  categorie : "Categorie",
  items : []
}

List.PropsTypes = {
  items : PropsTypes.arrayOf(PropsTypes.shape({id : PropsTypes.number, name : PropsTypes.string, calorie : PropsTypes.number} ) ),
  categorie : PropsTypes.string,
}


export default App
