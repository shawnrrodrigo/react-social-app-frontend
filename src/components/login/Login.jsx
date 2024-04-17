import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">AllSocial</div>
          <div className="loginDesc">
            Connect with Friends and World around you with All Social
          </div>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginEmail"></input>
                <input placeholder="Password" className="loginPassword"></input>
                <button className="loginBtn">Login</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegister">Create a new Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
