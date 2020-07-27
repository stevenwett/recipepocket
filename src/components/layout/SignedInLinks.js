import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Button } from 'reactstrap';

const SignedInLinks = () => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<NavLink className="nav-link" to="/">+ Add Recipe</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="nav-link" to="/">My Recipes</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="nav-link" to="/">Log Out</NavLink>
			</NavItem>
			<NavItem>
				<NavLink to="/">
					<Button outline color="light">
						SW
					</Button>
				</NavLink>
			</NavItem>
		</Nav>
	)
} 

export default SignedInLinks;
