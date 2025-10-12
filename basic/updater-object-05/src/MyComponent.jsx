import React , {useState} from 'react';
export function MyComponent(){
	 
	const[car, setCar] = useState({year: 2024 , make : "Ford" , model : "Mustanng"});

	const yearChange = (event) => {
		setCar(c => ({...car, year : event.target.value}))
	}
	
	const makeChange = (event) => {
		setCar(c => ({...car , make : event.target.value }))
	}

	const modelChange = (event) => {
		setCar(c => ({...car ,  model : event.target.value}));
	}

	return <div>
			<p>Your fav car is : {car.year} {car.make} {car.model} </p>
			<input type="text" value = {car.year}  onChange={yearChange}/> <br />
			<input type="text" value = {car.make}  onChange={makeChange}/> <br />
			<input type="text" value = {car.model}  onChange={modelChange}/> <br />
	</div>

}