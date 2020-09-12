import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';


const SignedOutLinks = () => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<NavLink className="btn btn-outline-secondary nav-link" to="/signin">Sign In</NavLink>
			</NavItem>
		</Nav>
	)
}

export default SignedOutLinks;
