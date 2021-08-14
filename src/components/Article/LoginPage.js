import React, { Component } from 'react';

class LoginPage extends Component {

  submitHandler = (event) => {
    event.preventDefault()
    console.log('EMAIL: ', event.target[0].value)
    console.log('PASSWORD: ', event.target[1].value)
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.submitHandler}>
            <label>Email: <input type="text" name="email" /></label><br />
            <label>Password: <input type="password" name="password"  /></label><br />
            <input type="submit" value="Submit" />
          </form>
      </div>
    )
  }
}

export default LoginPage