import React from 'react'
import { useEffect, useState } from 'react'
import axios  from "axios";

const Home =()=> {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/users').then(res => setUsers(res.data))
  }, [])
  
  const handleSubmit = async () => {
    try {
      axios.post('http://localhost:8000/users', {name: "amine", age: 25}).then(r => console.log(r)).catch(e => console.log(e))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
        <p  style={{fontSize: 25}}>Home page</p>
        {
          users?.map((user, index) => (<h1 key={index}>{user.name}, age : {user.age}</h1>))
        }
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Home