import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';


const SignedOutLinks = () => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<NavLink className="nav-link" to="/signup">Create an account</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="nav-link" to="/signin">Sign in</NavLink>
			</NavItem>
		</Nav>
	)
}

export default SignedOutLinks;
