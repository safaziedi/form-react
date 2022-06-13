import React, { useState, useEffect } from "react";
import "./Login.css";
import profile from "./../image/gamer.png";
import email from "./../image/email.jpg";
import passWORD from "./../image/pass.png";
import Users from "./Users.jsx";

const Register = () => {

  return (
    <div>
      <form>
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <div>
                <h1>Register Page</h1>
                <div>
                  <img src={email} alt="email" className="email" />
                  <input
                    type="text"
                    placeholder="user name"
                    className="name"
                    required="required"
                  />
                </div>
                <div className="second-input">
                  <img src={passWORD} alt="pass" className="email" />
                  <input
                    type="password"
                    placeholder="user password"
                    className="name"
                    required="required"
                  />
                </div>
                <div className="login-button">
                  <button type="submit">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      </div>
   
  );
};

export default Register;
