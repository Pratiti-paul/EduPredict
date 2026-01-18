import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import './Auth.css';

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
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="auth-page" style={{ flex: 1 }}>
                <div className="auth-wrapper">
                    <div className="auth-visual">
                        <img src="/hero-illustration.png" alt="EduPredict" />
                        <h2>Welcome Back</h2>
                        <p>Continue your journey to your dream college.</p>
                    </div>
                    <div className="auth-form-container">
                        <h2>Login to Account</h2>
                        <p className="auth-subtitle">Enter your credentials to access your dashboard.</p>
                        
                        {error && <div className="error-message">{error}</div>}

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

                            <button type="submit" className="btn-primary">Login</button>
                        </form>

                        <p className="auth-redirect">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
