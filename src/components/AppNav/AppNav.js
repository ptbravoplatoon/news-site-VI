import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "reactstrap";
import navItems from "../../config/Sections.json";
import UserContext from "../../contexts/UserContext.js";

class AppNav extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <Navbar color="light">
            {navItems.map((navItem, i) => (
              <NavItem key={`${navItem}-${i}`}>
                <Link to={`/sections/${navItem.value}`}>{navItem.label}</Link>
              </NavItem>
            ))}
            {userContext.user ? (
              <>
                <NavItem>
                  <Link to="/add-article">ADD AN ARTICLE</Link>
                </NavItem>
                <NavItem>
                  <Link to="/logout">LOG OUT</Link>
                </NavItem>
              </>
            ) : (
              <NavItem>
                <Link to="/login">LOG IN</Link>
              </NavItem>
            )}
          </Navbar>
        )}
      </UserContext.Consumer>
    );
  }
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
