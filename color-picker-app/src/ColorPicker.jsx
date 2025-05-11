import Rect , {useState } from "react"
export function ColorPicker(){

	const [color, setColor] = useState();

	const colorChange = (event) => {
		setColor(event.target.value);
	}

	return <div className="color-picker-container">
		<h1>Color Picker</h1>'
		<div className = "color-display " style = {
			{backgroundColor : color}
			}> 
			<lable >Select a color </lable>
			<input type="color"  value = {color} onChange={colorChange}/>
			</div>
	</div>
}