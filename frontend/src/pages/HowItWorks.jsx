import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="how-it-works-container">
                <div className="how-header">
                    <h1>How it Works</h1>
                    <p>Understanding the science behind your college prediction.</p>
                </div>

                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">01</div>
                        <h3>Data Collection</h3>
                        <p>We analyze thousands of records from previous counseling rounds to understand cutoff trends.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">02</div>
                        <h3>AI Analysis</h3>
                        <p>Our machine learning models process your scores against university-specific criteria.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">03</div>
                        <h3>Smart Matching</h3>
                        <p>We filter through hundreds of branches and campuses to find your best fits.</p>
                    </div>
                </div>

                <div className="detailed-section">
                    <div className="detailed-image">
                        <img src="/hero-illustration.png" alt="Process" />
                    </div>
                    <div className="detailed-text">
                        <h2>Personalized Recommendations</h2>
                        <p>Every student is unique. We take into account your category, preference of location, and branch interests to give you advice that actually matters.</p>
                        <ul className="feature-list">
                            <li>✨ Real-time cutoff updates</li>
                            <li>📍 Location-based filtering</li>
                            <li>🏫 500+ Top Universities</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HowItWorks;
