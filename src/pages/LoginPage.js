import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UsersAPI from '../api/UsersAPI';
import login from '../api/UsersAPI.js';

class LoginPage extends Component {
  state = {
    email: null,
    password: null,
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const credentialsObject = {
      email: this.state.email,
      password: this.state.password
    }
    const user = await UsersAPI.login(credentialsObject);
    this.props.handleLogin(user)
    this.props.history.push('/')
  };

  handleChange = (event) =>{
    const name = event.target.name
    const value = event.target.value

    if (name == 'email'){
      this.setState({email: value})
    }
    else if (name =='password') {
      this.setState({password: value})
    }
    else{
      console.log('Something is wrong with the field name.')
    }
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <h3> Login </h3>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" onChange={this.handleChange}/>
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
