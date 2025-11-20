import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    const success = login(username, password);
    if(success) {
      navigate("/posts");
    }
  };

  return (
    <div class="login">
      <h1>Login</h1>
    
      <form onSubmit={onSubmit}>
        <input 
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <br />
        <input 
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />


        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;