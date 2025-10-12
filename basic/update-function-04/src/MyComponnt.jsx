// updater function = A function passed yo setState() usually ex. setYear (arrow function )
//                   Allow for safe updaates based on the previous state . Used with mutiples 
//                   state update and asyncroneous function . good proctice is t use updater function 


import React, {useState} from 'react'
export function MyComponent(){

	const[count , setCount ] = useState();

	function increment(){

		//Takes tge pending state to calclulaet Next state .
		//React puts your updatee function in a que ( waiting in line ).
		//During the next render , it will call them in the same order 

		setCount(c => c+1);
		setCount(c => c+ 1);
	}

	function decrement() {
		setCount(c => c-1);
		setCount(c => c-1);
	}

	function reset(){
		setCount(0);
	}

	return <div>
				<p className = "count-display" >{count}</p>
				<button className = "counter-button" onClick = {decrement}>Decreament</button>		
				<button className = "counter-button" onClick = {increment}>Increament</button>		
				<button className = "counter-button" onClick= {reset}>Reset</button>	
			</div>


}