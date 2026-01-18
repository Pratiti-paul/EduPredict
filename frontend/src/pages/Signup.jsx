import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import './Auth.css';

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
            await axios.post('/api/auth/signup', formData);
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div className="auth-page" style={{ flex: 1 }}>
                <div className="auth-wrapper">
                    <div className="auth-visual">
                        <img src="/hero-illustration.png" alt="EduPredict" />
                        <h2>Join EduPredict</h2>
                        <p>Unlock your future with accurate college predictions.</p>
                    </div>
                    <div className="auth-form-container">
                        <h2>Create Your Account</h2>
                        <p className="auth-subtitle">Sign up to access the college predictor dashboard.</p>
                        
                        {error && <div className="error-message">{error}</div>}

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

                            <button type="submit" className="btn-primary">Sign Up</button>
                        </form>

                        <p className="auth-redirect">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
