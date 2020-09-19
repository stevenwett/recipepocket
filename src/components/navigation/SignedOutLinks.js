import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';


const SignedOutLinks = () => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<Link className="btn btn-outline-secondary nav-link" to="/signin">Sign In</Link>
			</NavItem>
		</Nav>
	)
}

export default SignedOutLinks;
