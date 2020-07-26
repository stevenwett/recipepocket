import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Container } from 'reactstrap';

const Navbar = () => {
	return (
		<section className="navbar-light bg-light">
			<h1 className="sr-only">recipepocket navigation</h1>
			<Container>
				<Link to='/' className="navbar-brand">
					<img src="https://via.placeholder.com/30" width="30" height="30" className="d-inline-block align-top" alt="" />
					recipepocket
				</Link>
				<SignedInLinks />
				<SignedOutLinks />
			</Container>
		</section>
	)
} 

export default Navbar;
