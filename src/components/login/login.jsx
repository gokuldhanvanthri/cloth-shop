import React, { useState } from "react";
import { connect } from "react-redux";

import "./login.scss";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const Login = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="login">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          value={email}
          type="email"
          handleChange={handleChange}
          required
          label="Email"
        />

        <FormInput
          name="password"
          value={password}
          type="password"
          required
          handleChange={handleChange}
          label="password"
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(Login);
