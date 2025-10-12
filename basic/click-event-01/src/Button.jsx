export function Button(){

// click event = An interaction when a user clik on specific element . We can respond 
// to click sby passing a callback to the onClick handler 



//onclickHandler 
	let count = 0 ; 
	const onlclickHandler1 = (name) => {
		if(count  < 3 ) {
			count++;
			console.log(`${name} you click me ${count} times`)
			return 
		}
		console.log("Stop Clicking me ");
	}


	
// for the  changing the text while chicking button 
	const onclickHandler2 = (e) => e.target.textContent = "Ouch!! Here"


 
	return <div>
		<button onClick = { (e) => onclickHandler2(e)} > click me </button>
	</div>
}