import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/login', formData);
      // Save user info/token (simplified for now)
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-visual">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
             <div style={{ fontSize: '100px' }}>🎓</div> 
             <h2 style={{ color: '#f57c00', marginTop: '20px' }}>Welcome Back</h2>
             <p style={{ color: '#757575', marginTop: '10px' }}>Continue your journey to your dream college.</p>
          </div>
        </div>
        <div className="auth-form">
          <h2 style={{ fontSize: '28px', marginBottom: '10px', color: '#333' }}>Login to Account</h2>
          <p style={{ color: '#757575', marginBottom: '30px' }}>Enter your credentials to access your dashboard.</p>
          
          {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="label">Email</label>
                <input 
                  className="input-field" 
                  type="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
            </div>

            <div className="form-group">
                <label className="label">Password</label>
                <input 
                  className="input-field" 
                  type="password" 
                  name="password" 
                  placeholder="••••••••" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                />
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>Login</button>
          </form>

          <p style={{ marginTop: '20px', textAlign: 'center', color: '#757575' }}>
            Don't have an account? <Link to="/signup" style={{ color: '#f57c00', fontWeight: '600' }}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
