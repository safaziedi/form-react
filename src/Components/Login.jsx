import React from "react";
import "./Login.css";
import profile from "./../image/a.png";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();


  return (
    <form>
    <div className="main">
      <div className="sub-main">
        <div>

          <div className="imgs">
           
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" /></div> </div> <div>
            <h1>Login Page</h1>
            <div>
              
              <input type="text" placeholder="user name" className="name" required="required" />
            </div>
            <div className="second-input">
              <input type="password" placeholder="user password" className="name" required="required" />
            </div>
            <div className="login-button">
              <button onClick={() => navigate('/hello')} >Login</button>
            </div>

            <p className="link">
              <a href="/register">Forgot password ?</a> Or <a href="/register">Sign Up</a>
            </p>
          
        </div>
      </div>
    </div>
    </div >
    </form>
  );
}

export default Login;
