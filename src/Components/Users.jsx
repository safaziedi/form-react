import React from 'react'

const Users= ({users})=> {
  return ( 
    
    (users|| []).map(user=>(
      
    <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.pass}</td>         
    </tr>  
  

)))
}


export default Users
