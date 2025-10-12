//onChange - event handler used for the primarly with from elements 

import { set } from 'mongoose';
import React , { useState } from 'react'; 
function MyComponent() {

	const[ name , setName] = useState("guest");
	const[quantity , setQuantity] = useState(0);
	const[comment , setComment] = useState(); 
	const[payment , setPayment] = useState(" ");
	const[shipping, setShipping] = useState("Delivery");

	function handlePaymentChange(e) {
		setPayment(e.target.value);
	}


	function handleNameChange(e){
		setName(e.target.value); 
	}

	function setQuantityChange(e){
		setQuantity(e.target.value);
	}

	function handleConmentChange(e) {
		setComment(e.target.value);
	}


	function handleShippingChange(e){
		setShipping(e.target.value);
	}

	return (
		<div>
			<input type="text" value = { name } onChange={handleNameChange}/>
			<p>Name : {name} </p>

			<br />

			<input type="Number" value = { quantity }  onChange = {setQuantityChange}/>
			<p>Quantity : {quantity}</p> 

			<input type="text" value = { comment } onChange = { handleConmentChange } placeholder = "Enter your dilevery instruction " />
			<p>Comment : { comment }</p>

			<select value = { payment} onChange={handlePaymentChange} >
			<option value="">Select the option </option>
			<option value="Cash">Cash</option>
			<option value="Visa">Visa</option>
			<option value="MasterCard">Master Card</option>
			<option value="GiftCard">GiftCard</option>
			</select>

			<p>Payment : { payment }</p>

			<lable>
				<input type="radio"  value = "Pick Up" checked =  { shipping === "Pick Up" } onChange = { handleShippingChange } />
				Piick Up</lable>
			<lable>
				<input type= "radio" value = "Delivery" checked = { shipping === "Delivery" } onChange = { handleShippingChange } />
				Delivery</lable>

				<p>Shipping {shipping}</p>

		</div>
	)

}

export default MyComponent; 
