import React , {useState} from 'react'
export function MyComponent() { 
	

	const [count , setCount ] = useState(0);
	//onclickHandler 
	
	const increament = () =>{
		setCount(count+1) 
	}

	const decreament = () => {
		setCount(count-1);
	}

	const reset = () => {
		setCount(0)
	}

	const onclickHandler = (e) => e.target.textContent = "Ouch!!"
	
	return <div>
		<p className = "counter-display">{count}</p>
		<button className = "counter-button" onClick = {increament}>Increament</button>
		<button className = "counter-button" onClick = {decreament}>Decrement</button>
		<button className = "counter-button" onClick = {reset}>Reset</button>
	</div>
	 


} 