import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'reactstrap';
import navItems from '../../config/Sections.json';
import UserContext from '../../contexts/UserContext';

function AppNav() {
  const userContext = React.useContext(UserContext);

  return (
    <Navbar color="light">
      {navItems.map((navItem) =>
        <NavItem>
          <Link to={`/sections/${navItem.value}`} >
            {navItem.label}
          </Link>
        </NavItem>
      )}
      {!userContext.user ? 
        <NavItem>
          <Link to={"/login"}>Login</Link>
        </NavItem>
      :
        <div>
        <NavItem>
          <Link to="/add-article">Add an Article</Link>
        </NavItem>
        <NavItem>
          <Link to={"/logout"}>Logout</Link>
        </NavItem>
        </div>
      }
    </Navbar>
  );
}
export default AppNav;


// Functional solution:

