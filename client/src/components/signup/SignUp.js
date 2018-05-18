import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
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
    );
  }
}
