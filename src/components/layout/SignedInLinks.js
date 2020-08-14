import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Button } from 'reactstrap';

const SignedInLinks = (props) => {
  const { profile } = props;
  return (
    <Nav className="justify-content-end">
      <NavItem>
        <NavLink className="nav-link" to="/">dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/recipe">+ add recipe</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/account">
          <Button outline color="light">
            { profile.initials }
          </Button>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default SignedInLinks;
