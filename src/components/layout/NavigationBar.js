import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import { connect } from 'react-redux'

const NavigationBar = (props) => {
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
	return (
		<Navbar dark>
			<h1 className="sr-only">recipepocket navigation</h1>
			<Container>
				<NavbarBrand href="/">recipepocket</NavbarBrand>
				{ links }
			</Container>
		</Navbar>
	)
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NavigationBar);
