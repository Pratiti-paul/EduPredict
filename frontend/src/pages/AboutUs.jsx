import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            
            <div className="about-main">
                {/* 1. Hero Section */}
                <section className="about-hero">
                    <div className="container">
                        <h1 className="hero-heading">Our Mission is to Empower Every Student</h1>
                        <p className="hero-subheading">
                            Building transparent, data-driven tools to help students make confident college decisions.
                        </p>
                    </div>
                </section>

                {/* 2. Who Are We (Gradient Card) */}
                <section className="about-who-we-are">
                    <div className="container">
                        <div className="mission-card">
                            <h2 className="section-title white-text">Who are we?</h2>
                            <div className="mission-content">
                                <p>EduPredict is a student-focused educational technology project.</p>
                                <p>Our goal is to simplify the college admission decision process.</p>
                                <p>We believe students deserve clarity, not confusion.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Why We Built This (White Background) */}
                <section className="about-why">
                    <div className="container">
                        <h2 className="section-title dark-text">Why We Built This</h2>
                        <div className="why-text-wrapper">
                            <p>Many students struggle to understand their real chances during the college admission process.</p>
                            <p>EduPredict was built to provide data-backed guidance and reduce uncertainty in decision-making.</p>
                        </div>
                    </div>
                </section>

                {/* 4. Core Values (Grid) */}
                <section className="about-values">
                    <div className="container">
                        <h2 className="section-title dark-text">Our Core Values</h2>
                        <div className="values-grid">
                            <div className="value-card">
                                <span className="value-icon">🎯</span>
                                <h3>Accuracy</h3>
                                <p>Predictions based on verified historical admission data.</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">🤝</span>
                                <h3>Integrity</h3>
                                <p>Transparent, unbiased insights with no hidden agendas.</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">🎓</span>
                                <h3>Student Focus</h3>
                                <p>Designed to guide and support students at every step.</p>
                            </div>
                            <div className="value-card">
                                <span className="value-icon">⚡</span>
                                <h3>Speed</h3>
                                <p>Instant results without complex processes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Who This Is For (Bullet Section) */}
                <section className="about-audience">
                    <div className="container">
                        <div className="audience-wrapper">
                            <h3 className="audience-title">Who This Is For</h3>
                            <ul className="audience-list">
                                <li>Students exploring college options</li>
                                <li>Applicants planning future admissions</li>
                                <li>Learners seeking data-driven guidance</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 6. Data & Ethics Note (Footer Style) */}
                <div className="about-footer-note">
                    <p>EduPredict provides estimates based on historical data.</p>
                    <p>We respect user privacy and do not store or sell personal information.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
