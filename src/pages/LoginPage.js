import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UsersAPI from '../api/UsersAPI'

class LoginPage extends Component {

  state = {
    email: null,
    password: null,
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    if (name === 'email') {
      this.setState({email: value})
    } else if (name === 'password') {
      this.setState({password: value})
    }
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const credentialsObject = {
      email: this.state.email,
      password: this.state.password
    }
    const user = await UsersAPI.login(credentialsObject)
    this.props.handleLogin(user)
    this.props.history.push('/')
  };

  render() {
    return (
      <div style={{padding: '20px'}}>
        <h3> Login </h3>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" onChange={(event) => this.handleChange(event)} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" onChange={(event) => this.handleChange(event)} />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage;


// Functional solution:
// function LoginPage() {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target.elements[0].value);
//     console.log(event.target.elements[1].value);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h3> Login </h3>
//       <Form onSubmit={handleFormSubmit}>
//         <FormGroup>
//           <Label for="email">Email</Label>
//           <Input type="email" name="email" id="email" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="password">Password</Label>
//           <Input type="password" name="password" id="password" />
//         </FormGroup>
//         <Button>Submit</Button>
//       </Form>
//     </div>
//   )
// };
