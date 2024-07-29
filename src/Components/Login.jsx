import React from "react";
import "./Login.css";
import profile from "./../image/a.png";
import { useNavigate } from "react-router-dom";
import axios  from "axios";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

const handlesubmit =(e) => {
  e.preventDefault()
  axios.post(
    'http://localhost:8000/login',
    {
      email: email,
      password: password 
    }
  )
  .then((res) =>{
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
}

  return (
    <form  onSubmit={handlesubmit}>
    <div className="main">
      <div className="sub-main">
        <div>

          <div className="imgs">
           
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" /></div> </div> <div>
            <h1>Login Page</h1>
            <div>
              
              <input type="email" placeholder="email" className="name" required="required" 
              value={email} onChange={
              (e) => {
                setEmail(e.target.value)
              } }/>
            </div>
            <div className="second-input">
              <input type="password" placeholder="password" className="name" required="required"
              value={password} onChange={
                (e) => {
                  setPassword(e.target.value)
                }
              } autoComplete="off"  />
            </div>
            <div className="login-button">
              <button /*onClick={() => navigate('/hello')}*/ type="submit">Login</button>
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
