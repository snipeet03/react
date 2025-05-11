
//React Hook - Special funtion that allows function components to use React function without class components 
//            (useState , useEffect , useContest, useReduce , useCallback , and more ... )

// userState - A rect hook that allows the creation a staetfull variable and a setter function to update its cale 
//             in virtual Dom 

import React, {useState} from 'react';
export function MyComponent() {

	const [name, setName] = useState("Guest"); 

	const [age , setAge] = useState(0);

	const [number, setNumber] = useState("xxxx-xx-xxxx")

	const [isEmployed, setEmployed] = useState(false);



	const updateName = () => {
		setName("nv");
	}

	const updateAge = () => {
		setAge(34)
	}
  
	const updateNumber = () => {
		setNumber(9503294376)
	} 

	const toggleEmployedStatus = () => {
		setEmployed(!isEmployed);
	}

	return <div>

		<p>Name : {name}</p>
		<button onClick = {updateName}> Set Name</button>

		<p>Age : {age}</p>
		<button onClick = {updateAge}> Set Age</button>

		<p>Number : {number}</p>
		<button onClick = {updateNumber}>Set Number</button>

		<p>Is Emplaoyes : {isEmployed ? "Yes" :  "No"} </p>
		<button onClick = {toggleEmployedStatus }>Toogle Status</button>

	</div>	
}