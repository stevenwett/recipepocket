import React from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from 'reactstrap';


const SignedOutLinks = () => {
	return (
		<div className="nav-group">
				<Link className="btn nav-link" to="/signin">Sign In</Link>
		</div>
	)
}

export default SignedOutLinks;
