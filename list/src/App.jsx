import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List' 
import PropTypes from "prop-types"
function App() {
  const [count, setCount] = useState(0)


  const fruits = [
		{
			id :1, 
			name : "Orange", 
			calorie: 23
		}, 
		{
			id : 2, 
			name : "Apple", 
			calorie : 34
		}, 
		{
			id : 3, 
			name : "Pineapple", 
			calorie : 67
		}, 
		{
			id : 4, 
			name : "Coconut", 
			calorie : 34
		}
	] 


  const vegetable = [
    {
			id :6, 
			name : "Bringle", 
			calorie: 23
		}, 
		{
			id : 2, 
			name : "Cucumber", 
			calorie : 34
		}, 
		{
			id : 3, 
			name : "Califlower", 
			calorie : 67
		}, 
		{
			id : 4, 
			name : "Potatos", 
			calorie : 34
		}
  ]


  List.defaultProps = {
      categorie : "Category ", 
      items : [],
  }

  List.PropTypes = {
      categorie : PropTypes.string,
      items : PropTypes.arrayOf(PropTypes.shape( {id : PropTypes.number , name : PropTypes.string , calorie : PropTypes.number}))
    
  }

  return (
    <>
      <List items = {fruits} categorie = "Fruits"></List>
      <List items = {vegetable} categorie = "Vegetable "></List>
      <List></List>
    </>
  )
}

export default App



