import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/login.css';
import apicall from '../../../Endpoint';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${apicall}/api/auth/login`, {
        email,
        password,
      });

      const { token, name, _id } = response.data;

      // Save token and user info in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ name, email, _id }));

      navigate('/admin');
    } catch (error) {
      const message = error.response?.data?.message || 'Invalid credentials';
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="welcome-text">Welcome to QAI</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <center><h2>Login</h2></center>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;