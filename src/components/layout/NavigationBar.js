import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar, NavbarBrand, Container } from 'reactstrap';
import { connect } from 'react-redux'

const NavigationBar = (props) => {
  console.log(props);
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
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
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavigationBar);
