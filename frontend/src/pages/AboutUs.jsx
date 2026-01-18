import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="about-container">
                <div className="about-hero">
                    <h1>Our Mission is to Empower Every Student</h1>
                    <p>Building the next generation of data-driven education solutions.</p>
                </div>

                <div className="about-content">
                    <div className="mission-card">
                        <h2>Who are we?</h2>
                        <p>EduPredict is a team of educators and developers committed to making the college admission process transparent and stress-free. We believe that every student deserves to know their options clearly.</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-item">
                            <span className="value-icon">🎯</span>
                            <h3>Accuracy</h3>
                            <p>We pride ourselves on providing the most precise predictions based on verified data.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">🤝</span>
                            <h3>Integrity</h3>
                            <p>Transparency is at our core. No hidden agendas, just pure data-driven advice.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">⚡</span>
                            <h3>Speed</h3>
                            <p>Get results in seconds so you can spend more time focusing on your future.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
