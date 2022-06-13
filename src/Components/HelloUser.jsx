import React from 'react'
import { useNavigate , useParams } from "react-router-dom";


const HelloUser =()=> {
  const navigate = useNavigate();
  const params = useParams();
  const username = params.username ;
  return (
    <div >
        <p style={{fontSize: 25}}>Hello {username} </p> <br />  <br />
        <div className="logout-button">
              <button onClick={() => navigate(-1)} >Log Out</button>
        </div>
    </div>
  )
}

export default HelloUser