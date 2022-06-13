import React, { useState, useEffect } from "react";
import "./Login.css";
import profile from "./../image/gamer.png";
import email from "./../image/email.jpg";
import passWORD from "./../image/pass.png";
import Users from "./Users.jsx";



// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Register = () => {
  const [users, setUsers] = useState(getDatafromLS());

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleAddUserSubmit = (e) => {
    e.preventDefault();
    let user = {
      name,
      pass,
    };

    setUsers([...users, user]);
    setName("");
    setPass("");
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <form onSubmit={handleAddUserSubmit}>
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
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="second-input">
                  <img src={passWORD} alt="pass" className="email" />
                  <input
                    type="password"
                    placeholder="user password"
                    className="name"
                    required="required"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
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

      <div className='Users-container'>
          {users.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name </th>
                    <th>Password </th>
                  </tr>
                </thead>
                <tbody>
                  <Users users={users}/>
                </tbody>
              </table>
            </div>
          </>}
          {users.length < 1 && <div>No users are added yet</div>}
        </div>

      </div>
   
  );
};

export default Register;
