// onChange = event handler use primarrly wtih form elements ex. 
// <input> , <textarea> , <select> , <radio>  Triggers a function every time then value of the input changes 

import React , {useState} from 'react';
export function  MyComponent() {

	const [name, setName] = useState("Guest")

	const [quantity, setQunatity] = useState(0); 

	const [comment, setComment] = useState();

	const [payment , setPayment] = useState("");

	const [shipping , setShipping] = useState("Dilevery");


	const onclickQuantity = (event) => { 
		setQunatity(event.target.value);

	}

	function onlcickNameChanger(event) {
		setName(event.target.value);
	} 


	const commetChange = (event) => {
		setComment(event.target.value);
	}

	const paymentChange = (event) => {
		setPayment(event.target.value);
	}
	
	const shippingChange = (event) => {
		setShipping(event.target.value);
	}

	return 	<div>
				<input type="Number" value = {quantity} onChange = {onclickQuantity} />
				<p> Qaunatity : {quantity} </p>

				<input type="text"  value = {name} onChange = {onlcickNameChanger}/>
				<p>Name : {name} </p>

				<textarea value = {comment} onChange = {commetChange} placeholder = "Enter the dilivery instruction"></textarea>
				<p>Comment : {comment}</p>

				<select value = {payment} onChange={paymentChange}>
					<option value = "">Selct an option</option>
					<option value="visa">Visa</option>
					<option value="master-Card">Master-Card</option>
					<option value="Gift-card">Gift-card</option>
				</select>
				<p>Payment : {payment}</p>

				<lable>
					<input type="radio" value="Pick up " checked = {shipping === "Pick up"}  onChange={shippingChange}/>Pick-up
				</lable>
				<lable>
				<input type="radio" value="Divelery " checked = {shipping === "Divelery"}  onChange={shippingChange}/>Dilevery
				</lable>
				<p>Shipping : {shipping}</p>
			</div>




}