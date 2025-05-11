import propTypes from 'prop-types'

function UserGreeting(props){


	const welcomeMessge = <h2 className = "Welcome.msg">Welcome {props.username}</h2>


	const loginPromt = <h2 className="login.promt">Please login to continue</h2>


	return (props.isLoggedIn ? welcomeMessge : loginPromt);
	

}

UserGreeting.prototypes = {
	isLoggedIn : propTypes.bool,
	username : propTypes.string
}

UserGreeting.defaultProps = {
	isLoggedIn : false,
	username : "Guest"
}



export default UserGreeting
