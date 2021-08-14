import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import AddArticlePage from './pages/AddArticlePage.js';
import ArticlePage from './pages/ArticlePage.js';
import SectionPage from './pages/SectionPage.js';
import UserContext from './context/UserContext.js';

class App extends Component {
  state = {
    user: null,
  }

  setUser = (userObj) => {
    this.setState({ 
      user: userObj
    })
  }


  render() {
    const renderLoginPage = (props) => {
      return (
        <LoginPage
          history={props.history}
          handleLogin={this.setUser} />
      )
    }

    const renderLogout = (props) => {
      this.setState({ user: null })
      return (
        <Redirect to="/login" />
      )
    }

    const renderAddArticlePage = (prop) => {
      if (this.state.user){
        return (
          <AddArticlePage />
        )
      }
      else{
        return (
        <Redirect to="/login" />
      )}
    }

    return (
      <div>
        <Router>
          <div>
            <UserContext.Provider value={{ user: this.state.user }}>
              <AppNav />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" render={renderLoginPage} />
              <Route exact path="/add-article" render={renderAddArticlePage} />
              <Route exact path="/articles/:articleID" component={ArticlePage} />
              <Route exact path="/sections/:sectionID" component={SectionPage} />
              <Route exact path="/logout" render={renderLogout} />
            </UserContext.Provider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


// Functional solution:
// function App() {
//   return (
//     <div>
//       <AppNav />
//       <Router>
//         <div>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/add-article" component={AddArticlePage} />
//           <Route exact path="/articles/:articleID" component={ArticlePage} />
//           <Route exact path="/sections/:sectionID" component={SectionPage} />
//         </div>
//       </Router>
//     </div>
//   );
// }
