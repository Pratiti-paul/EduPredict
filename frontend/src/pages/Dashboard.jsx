import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
           setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div className="dashboard-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />

            {/* Hero Section */}
            <div style={{ flex: 1 }}>
                <header className="dashboard-hero">
                    <div className="hero-background-circle"></div>

                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1 className="hero-title">
                                    Find Your Best Fit <br />
                                    College with Our <br />
                                    <span>Predictor</span>
                                </h1>
                                <p className="hero-description">
                                    Get accurate predictions of the colleges you can get into based on your exam scores.
                                </p>
                                <div className="hero-cta">
                                    <button className="btn-primary">Get Started</button>
                                    <button className="btn-secondary">Learn More</button>
                                </div>
                            </div>
                            <div className="hero-image">
                                 <img 
                                    src="/hero-illustration.png" 
                                    alt="EduPredict Illustration" 
                                 />
                            </div>
                        </div>
                    </div>
                </header>

                {/* How It Works Section Removed */}

                {/* Recent Predictions Section */}
                <section className="recent-predictions">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Recent Predictions</h2>
                            <p className="section-subtitle">Based on your latest exam performance and preferences.</p>
                        </div>

                        <div className="predictions-grid">
                            {[
                                { college: 'IIT Bombay', date: 'Oct 12, 2023', chance: 'High', score: '98.5', rank: '452' },
                                { college: 'NIT Trichy', date: 'Oct 10, 2023', chance: 'High', score: '98.5', rank: '1205' },
                                { college: 'BITS Pilani', date: 'Oct 05, 2023', chance: 'Medium', score: '382/450', rank: 'N/A' },
                                { college: 'DTU Delhi', date: 'Sep 28, 2023', chance: 'High', score: '98.5', rank: '2100' },
                                { college: 'VIT Vellore', date: 'Sep 20, 2023', chance: 'High', score: 'J-120', rank: '150' },
                                { college: 'IIIT Hyderabad', date: 'Sep 15, 2023', chance: 'Low', score: '98.5', rank: '800' }
                            ].map((item, idx) => (
                                <div key={idx} className="prediction-card">
                                    <div className="prediction-header">
                                        <div className="college-info">
                                            <h4>{item.college}</h4>
                                            <span className="prediction-date">{item.date}</span>
                                        </div>
                                        <span className={`chance-badge chance-${item.chance.toLowerCase()}`}>
                                            {item.chance} Chance
                                        </span>
                                    </div>
                                    
                                    <div className="prediction-details">
                                        <div className="detail-item">
                                            <span className="detail-label">Your Score</span>
                                            <span className="detail-value">{item.score}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Est. Rank</span>
                                            <span className="detail-value">{item.rank}</span>
                                        </div>
                                    </div>

                                    <button className="view-btn">View Full Report</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            
            <Footer />
        </div>
    );
};

export default Dashboard;
