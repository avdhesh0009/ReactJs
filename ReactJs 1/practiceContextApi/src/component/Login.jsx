import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
export default function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const {user,setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser(username);
    }
    return(
        <>
           <h1>Login</h1>
           <input
           type="text"
           value={username}
           placeholder="username"
           onChange={(e)=>setUsername(e.target.value)}
           />
           <br/>
           <br/>
           <input
           type="text"
           value={password}
           placeholder="password"
           onChange={(e)=>setPassword(e.target.value)}
           />
           <br/>
           <br/>
           <button onClick={handleSubmit}>Submit</button>
        </>
    )
}