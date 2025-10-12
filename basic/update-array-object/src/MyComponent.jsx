import React, {useState} from 'react'; 

function MyComponent() {

	const [cars, setCars] = useState([]); 
	const [carYear, setCarYear] = useState(new Date().getFullYear); 
	const [carMake, setCarMake] = useState(''); 
	const[model, setModel] = useState(''); 


	function handleAddCar(){
		const newCar = { year : carYear, maek : carMake , model: model}; 
		setCars( [...c, newCar]);

	}

	function handleRemoveCar(index){

	}
	
	function handleYearChange(event){
		setCarYear(event.target.value); 
	} 

	function handleMakeChange(event){

	}

	function handleModelChange(event){
		setModel(event.target.value); 
	}

	return (<>
				<h2>List of car Objects : </h2>
				<ul>
						
				</ul>

				<input type="number" value={carYear}  onChange={handleYearChange} placeholder='Enter car year'/>
				<input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car made ' />
				<input type="text" value = {model} onChange={handleModelChange} placeholder='Enter car model'/>

				<button onClick={handleAddCar}>Add Car</button>
	</>); 
}


