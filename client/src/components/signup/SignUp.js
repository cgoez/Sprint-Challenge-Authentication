import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  state = {
    username: "",
    password: ""
  };

  inputHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.inputHandler}
              placeholder="Username"
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.inputHandler}
              placeholder="Password"
            />
          </div>
          <button onSubmit={this.submitHandler}>Sign Up</button>
        </form>
        <div>
          <p>Already registered? Click here to log in.</p>
        </div>
      </div>
    );
  }
}

export default SignUp;
