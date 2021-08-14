import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'reactstrap';
import navItems from '../../config/Sections.json';
import UserContext from '../../contexts/UserContext'

const AppNav = (props) => {

  const userContext = useContext(UserContext)

  return (
    <Navbar color="light">
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      {navItems.map((navItem) =>
        <NavItem>
          <Link to={`/sections/${navItem.value}`} >
            { navItem.label }
          </Link>
        </NavItem>
      )}
      { userContext.user && <NavItem><Link to="/add-article">Add an Article</Link></NavItem> }
      <NavItem>
        { userContext.user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link> }
      </NavItem>
    </Navbar>
  )
}

// class AppNav extends Component {
//   render() {
    // return (
    //   <Navbar color="light">
    //     <NavItem>
    //       <Link to="/">Home</Link>
    //     </NavItem>
    //     {navItems.map((navItem) =>
    //       <NavItem>
    //         <Link to={`/sections/${navItem.value}`} >
    //           { navItem.label }
    //         </Link>
    //       </NavItem>
    //     )}
    //     <NavItem>
    //       <Link to="/add-article">Add an Article</Link>
    //     </NavItem>
    //     <NavItem>
    //       <Link to="/login">Login</Link>
    //     </NavItem>
    //   </Navbar>
    // )
//   }
// }

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
