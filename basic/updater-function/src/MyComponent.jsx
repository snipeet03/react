
//updater funciton ---  A funciton passed as an argumet to setState() usually ex. setYear(year + 1)
//                 -- Allow for safe updates based on the previous state use with mutilple state updates 
//                 -- and asynncronous funciton . Good practiceto user updateer funciton 


import { set } from "mongoose";
import React, { useState } from "react";
function MyComponent() {
	
	const [count,setCount] = useState(0);

	function increamentCount(){
		//update and move to next state 
	
		// setCount(count +1);
		
		//for mutiple state updates
		//updating the prevoius state not the next state
		//it is updated in the que . A que isthe datastructure which is ( waiting  in line ) .
		setCount(count => count + 1); 
		setCount(count => count + 1);
		setCount(count => count + 1);

	}

	function decreamentCount(){
		setCount(count => count -1 );
		setCount(count => count -1 );
		setCount(count => count -1 );
	}

	function resetCount(){
		setCount( count => 0);
	}


	return(
		<div>
			<h1>Count : {count}</h1>
			<button onClick={increamentCount} >Increament </button>
			<button onClick={decreamentCount}>Decreament</button> 
			<button onClick={resetCount}>Reset</button>
		</div>
	)


}


export default MyComponent;