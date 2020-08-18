import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';

const SignedInLinks = (props) => {
  const { profile } = props;
  return (
    <div>
      <ButtonGroup>
        <NavLink role="button" className="btn btn-outline-light" to="/home">Home</NavLink>
        <NavLink role="button" className="btn btn-outline-light" to="/recipes">Recipes</NavLink>
        {/*<NavLink role="button" className="btn btn-outline-light" to="/groups">Groups</NavLink>*/}
        <NavLink role="button" className="btn btn-outline-light" to="/account">Account</NavLink>
      </ButtonGroup>
    </div>
  )
}

export default SignedInLinks;
