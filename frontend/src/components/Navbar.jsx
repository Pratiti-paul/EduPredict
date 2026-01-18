import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);

    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const updateUserData = () => {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        };

        updateUserData();
        window.addEventListener('storage', updateUserData);
        return () => window.removeEventListener('storage', updateUserData);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        setShowDropdown(false);
        navigate('/login');
    };

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="logo-icon">🎓</div>
                    <h1 className="logo-text">College Predictor</h1>
                </Link>
                
                <div className="navbar-menu">
                    <div className="navbar-links">
                        <Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>Home</Link>
                        <Link to="/predictor" className={isActive('/predictor') ? 'active' : ''}>College Predictor</Link>
                        <Link to="/how-it-works" className={isActive('/how-it-works') ? 'active' : ''}>How It Works</Link>
                        <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
                    </div>
                    
                    <div className="navbar-actions">
                        {user ? (
                            <div className="user-profile-wrapper">
                                <div className="user-profile" onClick={toggleDropdown}>
                                    <div className="user-avatar">
                                        {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                                    </div>
                                    <span className="dropdown-arrow">▼</span>
                                </div>
                                
                                {showDropdown && (
                                    <div className="profile-dropdown">
                                        <div className="dropdown-header">
                                            <p className="user-name">{user.fullName}</p>
                                            <p className="user-email">{user.email}</p>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                                            <span className="item-icon">👤</span> Profile
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <button onClick={handleLogout} className="dropdown-item logout-item">
                                            <span className="item-icon">🚪</span> Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="login-link">Login</Link>
                                <Link to="/signup" className="signup-link">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
