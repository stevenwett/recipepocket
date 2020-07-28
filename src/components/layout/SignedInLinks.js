import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Button } from 'reactstrap';

const SignedInLinks = () => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<NavLink className="nav-link" to="/">+ Add recipe</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="nav-link" to="/">My recipes</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="nav-link" to="/">Log out</NavLink>
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
