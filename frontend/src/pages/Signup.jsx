import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'student',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/signup', formData);
      console.log(res.data);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-visual">
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
             {/* Placeholder for the vector art in the screenshot */}
             <div style={{ fontSize: '100px' }}>🛡️</div> 
             <h2 style={{ color: '#f57c00', marginTop: '20px' }}>Join EduPredict</h2>
             <p style={{ color: '#757575', marginTop: '10px' }}>Unlock your future with accurate college predictions.</p>
          </div>
        </div>
        <div className="auth-form">
          <h2 style={{ fontSize: '28px', marginBottom: '10px', color: '#333' }}>Create Your Account</h2>
          <p style={{ color: '#757575', marginBottom: '30px' }}>Sign up to access the college predictor dashboard.</p>
          
          {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="label">Full Name</label>
                <input 
                  className="input-field" 
                  type="text" 
                  name="fullName" 
                  placeholder="John Doe" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required 
                />
            </div>
            
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

            <div className="form-group">
                <label className="label">Role</label>
                <select 
                  className="input-field" 
                  name="role" 
                  value={formData.role} 
                  onChange={handleChange}
                >
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>Sign Up</button>
          </form>

          <p style={{ marginTop: '20px', textAlign: 'center', color: '#757575' }}>
            Already have an account? <Link to="/login" style={{ color: '#f57c00', fontWeight: '600' }}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
