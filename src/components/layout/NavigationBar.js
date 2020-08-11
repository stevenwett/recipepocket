import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Navbar, Container } from 'reactstrap';
import { connect } from 'react-redux'

const NavigationBar = (props) => {
  console.log(props);
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
	return (
		<Navbar>
			<h1 className="sr-only">recipepocket navigation</h1>
			<Container>
				<div className="app-name">recipepocket</div>
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
