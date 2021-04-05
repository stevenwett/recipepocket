import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = (props) => {
  return (
    <div className="nav-group">
      <NavLink role="button" className="btn" to="/dashboard">Dashboard</NavLink>
      <NavLink role="button" className="btn nav-account" to="/account"><span>Account</span></NavLink>
    </div>
  )
}

export default SignedInLinks;
