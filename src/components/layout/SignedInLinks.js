import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

const SignedInLinks = () => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<NavLink to="/">+ Add Recipe</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/">My Recipes</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/">Log Out</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/" className="btn btn-primary">SW</NavLink>
			</NavItem>
		</Nav>
	)
} 

export default SignedInLinks;
