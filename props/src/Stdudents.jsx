import propTypes from "prop-types";



// 1. propType give the warrning for the worng inputs done in the code in the console with location 

function Student(props) {
	return(
		<div className = "student">
			<p>Name : {props.name}</p>
			<p>Age : {props.age}</p>
			<p>isStudent : {props.isStudent ?  "Yes" : "No" }</p>
		</div>
	);
}

Student.PropTypes = { 
	name  : propTypes.string,
	age : propTypes.number,
	isStudent : propTypes.boolean,
}

Student.defaultProps = {
	name : "Guest", 
	age : 0,
	isStudent : True
}

export default Student