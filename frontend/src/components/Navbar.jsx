import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);

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
        // Listen for storage changes in the same tab
        window.addEventListener('storage', updateUserData);
        return () => window.removeEventListener('storage', updateUserData);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

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
                        <a href="#">Features</a>
                        <a href="#">How It Works</a>
                        <a href="#">Contact</a>
                    </div>
                    
                    <div className="navbar-actions">
                        {user ? (
                            <div className="user-profile">
                                <div className="user-avatar">
                                    {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                                </div>
                                <button onClick={handleLogout} className="logout-btn">Logout</button>
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
