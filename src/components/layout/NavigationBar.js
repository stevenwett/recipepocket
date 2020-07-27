import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const NavigationBar = () => {
	return (
		<Navbar dark>
			<h1 className="sr-only">recipepocket navigation</h1>
			<Container>
				<NavbarBrand href="/">recipepocket</NavbarBrand>
				<SignedInLinks />
				<SignedOutLinks />
			</Container>
		</Navbar>
	)
} 

export default NavigationBar;
