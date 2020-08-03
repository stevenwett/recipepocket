import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
	return (
		<Nav className="justify-content-end">
			<NavItem>
				<NavLink className="nav-link" to="/add-recipe">+ Add recipe</NavLink>
			</NavItem>
			<NavItem>
				<NavLink className="nav-link" to="/">My recipes</NavLink>
			</NavItem>
			<NavItem>
				<button className="nav-link" onClick={props.signOut}>Log out</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
