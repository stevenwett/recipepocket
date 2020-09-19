import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Container } from 'reactstrap';

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavigationBar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  console.log(props);
	return (
		<Navbar>
			<h1 className="sr-only">recipepocket navigation</h1>
			<Container>
				<div className="app-name">Recipepocket.app <span>beta</span></div>
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
