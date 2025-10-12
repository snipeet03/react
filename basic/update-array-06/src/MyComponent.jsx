import React, {useState} from 'react'
export function MyComponent() {

	const[foods, setFoods] = useState(["Apple", "Orange", "Banana" ]); 

	const addFood = () => {

		const newFood = document.getElementById("foodInput").value;
	    document.getElementById("foodInput").value="";

		setFoods(f => [...foods,newFood]);


	}

	const removeFood = (index) => {

		setFoods(foods.filter((_, i) => i != index));

	}

	return <div>
		<h2> List of Food </h2>
		<ul>
			{foods.map((food, index) =>  <li key = {index} onClick = {() => {removeFood}}> {food} </li> )}
		</ul>
		<input type="text"  id = "foodInput" placeholder='Enter food name' />
		<button onClick={addFood}>Add Food</button>
	</div>

}