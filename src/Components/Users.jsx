import React from 'react'
import { useEffect, useState } from 'react'
import axios  from "axios";
const Users= ()=> {
  const [users, setUsers] = useState([])
  useEffect(() => {
 axios.get('http://localhost:8000/users').then(res => setUsers(res.data))
       }, [])
  return (
    <div>
        <p  style={{fontSize: 25}}>Users page</p>
      <table border={'1'}> 
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>password</th>
            <th>confirmPassword</th>
          </tr>
        </thead>
        <tbody>
          
            
            {
          users?.map((user, index) => (
            <tr key={index}>
            <td>{user.firstName}</td> 
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password} </td>
            <td>{user.confirmPassword}</td>
            </tr>))
        }
  
        </tbody>
      </table>
    </div>
  )
}


export default Users


