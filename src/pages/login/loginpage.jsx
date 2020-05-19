import React from "react";
import "./loginpage.scss";
import Login from "../../components/login/login";
import SignUp from "../../components/sign-up/sign-up";

const LoginPage = () => {
  return (
    <div className="login-page">
      <Login />
      <SignUp />
    </div>
  );
};

export default LoginPage;
