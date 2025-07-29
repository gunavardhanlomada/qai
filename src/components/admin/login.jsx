import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add actual authentication logic here
    if (username && password) {
      navigate('/home');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <h1 className="welcome-text">Welcome to QAI</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <center><h2> Login </h2></center>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
