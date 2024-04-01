import React, { useState } from 'react';
import "./index.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      alert("login successful. click on any name to open message box")
      setUsername("");
      onLogin(username);
    }
  };

  return (
    <center className="login-con">
      <div>
      <input className="input" type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
      <button className="button" onClick={handleLogin}>Login</button>
      </div>
    </center>
  );
}

export default Login;
