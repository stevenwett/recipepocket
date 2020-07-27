import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';


const SignedOutLinks = () => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<NavLink className="nav-link" to="/">Sign Up</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="nav-link" to="/">Log In</NavLink>
			</NavItem>
		</Nav>
	)
} 

export default SignedOutLinks;
