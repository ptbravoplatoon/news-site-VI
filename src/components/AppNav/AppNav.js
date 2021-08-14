import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'reactstrap';
import navItems from '../../config/Sections.json';
import UserContext from '../../context/UserContext';

const AppNav = () => {
  const userContext = useContext(UserContext)
  const loggedInUser = userContext.user
  return (
    <Navbar color="light">
      <NavItem>
      <Link to="/">Home Page ~</Link>
      </NavItem>
      {navItems.map((navItem) =>
        <NavItem>
          <Link to={`/sections/${navItem.value}`} key={navItem.value} >
            { navItem.label }
          </Link>
        </NavItem>
      )}
      {loggedInUser && <NavItem> <Link to="/add-article">Add an Article</Link></NavItem>}
      <NavItem>
      {loggedInUser ? <Link to="/logout">~ Log Out</Link> : <Link to="/login">~ Log In</Link>}
      </NavItem>
      
    </Navbar>
  )
}

export default AppNav;


// Functional solution:
// function AppNav() {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <NavItem>
//           <Link to={`/sections/${navItem.value}`} >
//             {navItem.label}
//           </Link>
//         </NavItem>
//       )}
//       <NavItem>
//         <Link to="/add-article">Add an Article</Link>
//       </NavItem>
//     </Navbar>
//   );
// }
