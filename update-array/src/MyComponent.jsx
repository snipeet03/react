import React , { useState } from "react";
import { use } from "react";

function MyComponent(){
	const [foods , setFoods ] = useState([ "Apple ", "Orange ", "Banane"])

	function handleAddFoods(){
		const newFood = document.getElementById("foodInput").value;
		setFoods(f => [...f, newFood]);
	}

	function handleRemoveFood(){

	}
	return (
		<div> <h2>List of food </h2>
		<ul> {foods.map((food, index) => <li key = {index}>{food}</li> )}</ul>

		<input type="text" id="foodInput " placeholder="Enter food name" />
		<button onClick = {handleAddFoods}>Add Food </button>

		</div>
	)

}



export default MyComponent;