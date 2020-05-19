import React from "react";
import "./login.scss";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            required
            handleChange={this.handleChange}
            label="password"
          />
          <div className="buttons">
            <Button type="submit">Sign in</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
