import React, { Component, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { login } from "../api/UsersAPI.js";

// class LoginPage extends Component {
//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target.elements[0].value);
//     console.log(event.target.elements[1].value);

//   };

//   render() {
//     return (
//       <div style={{ padding: "20px" }}>
//         <h3> Login </h3>
//         <Form onSubmit={this.handleFormSubmit}>
//           <FormGroup>
//             <Label for="email">Email</Label>
//             <Input type="email" name="email" id="email" />
//           </FormGroup>
//           <FormGroup>
//             <Label for="password">Password</Label>
//             <Input type="password" name="password" id="password" />
//           </FormGroup>
//           <Button>Submit</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// Functional solution:
function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case "email":
        setEmail(inputValue);
        break;
      case "password":
        setPassword(inputValue);
        break;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const credentialsObject = {
      email: email,
      password: password,
    };
    login(credentialsObject).then((user) => {
      props.handleLogin(user);
      props.history.push("/");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3> Login </h3>
      <Form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
export default LoginPage;
