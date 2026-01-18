import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <span className="logo-icon">🎓</span>
                        <span className="logo-text">College Predictor</span>
                    </Link>
                    <p className="footer-tagline">
                        Helping students find their perfect academic match through data-driven predictions.
                    </p>
                </div>
                
                <div className="footer-links-group">
                    <div className="footer-column">
                        <h4>Platform</h4>
                        <ul>
                            <li><Link to="/dashboard">Predictor</Link></li>
                            <li><a href="#">Colleges</a></li>
                            <li><a href="#">Exams</a></li>
                            <li><a href="#">Counseling</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Admission Blog</a></li>
                            <li><a href="#">Scholarships</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Newsletter</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>© 2026 EduPredict. All rights reserved.</p>
                        <div className="social-links">
                            <a href="#" className="social-icon">Twitter</a>
                            <a href="#" className="social-icon">LinkedIn</a>
                            <a href="#" className="social-icon">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
