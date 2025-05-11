import React , {useState} from 'react'; 
export function Counter() {

	const [count , setCount ] = useState(100); 

	const increament = () =>{
		setCount(count + 1 );
	}

	const decreament = () => {
		setCount(count-1);
	}

	const reset = () => {
		setCount(0);
	}

	return  <div>
				<p className = "count-display" >{count}</p>
				<button className = "counter-button" onClick = {decreament}>Decreament</button>		
				<button className = "counter-button" onClick = {increament}>Increament</button>		
				<button className = "counter-button" onClick= {reset}>Reset</button>		
			</div>


}