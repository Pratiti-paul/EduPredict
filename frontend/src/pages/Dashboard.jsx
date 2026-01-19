import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Mock Prediction Data (Replace with API call later)
    const predictions = [
        { college: 'IIT Bombay', date: 'Oct 12, 2023', chance: 'High', score: '98.5', rank: '452' },
        { college: 'NIT Trichy', date: 'Oct 10, 2023', chance: 'High', score: '98.5', rank: '1205' },
        { college: 'BITS Pilani', date: 'Oct 05, 2023', chance: 'Medium', score: '382/450', rank: 'N/A' },
        { college: 'DTU Delhi', date: 'Sep 28, 2023', chance: 'High', score: '98.5', rank: '2100' },
        { college: 'VIT Vellore', date: 'Sep 20, 2023', chance: 'High', score: 'J-120', rank: '150' },
        { college: 'IIIT Hyderabad', date: 'Sep 15, 2023', chance: 'Low', score: '98.5', rank: '800' }
    ];

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
           setUser(JSON.parse(storedUser));
        }
    }, []);

    const predictionStats = {
        high: predictions.filter(p => p.chance === 'High').length,
        medium: predictions.filter(p => p.chance === 'Medium').length,
        low: predictions.filter(p => p.chance === 'Low').length,
    };

    return (
        <div className="dashboard-page">
            <Navbar />

            {/* Hero Section */}
            <header className="dashboard-hero">
                <div className="hero-background-circle"></div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                Welcome Back, <br />
                                <span>{user ? user.firstName : 'Student'}</span>
                            </h1>
                            <p className="hero-description">
                                Ready to find your dream college? Your personalized dashboard is updated with the latest insights.
                            </p>
                            <div className="hero-cta">
                                <button className="btn-primary" onClick={() => navigate('/predict')}>New Prediction</button>
                            </div>
                        </div>
                        <div className="hero-image">
                             <img src="/hero-illustration.png" alt="Dashboard Hero" />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container dashboard-main-content">
                <div className="dashboard-grid">
                    
                    {/* LEFT COLUMN */}
                    <div className="dashboard-left-col">
                        
                        {/* 1. Quick Actions */}
                        <section className="quick-actions-section">
                            <h3 className="section-small-title">Quick Actions</h3>
                            <div className="quick-actions-grid">
                                <div className="action-card" onClick={() => navigate('/predict')}>
                                    <span className="action-icon">🚀</span>
                                    <span>New Prediction</span>
                                </div>
                                <div className="action-card">
                                    <span className="action-icon">🔄</span>
                                    <span>Re-run Last</span>
                                </div>
                                <div className="action-card">
                                    <span className="action-icon">⚖️</span>
                                    <span>Compare Colleges</span>
                                </div>
                                <div className="action-card">
                                    <span className="action-icon">📂</span>
                                    <span>View Reports</span>
                                </div>
                            </div>
                        </section>

                        {/* Recent Predictions */}
                        <section className="recent-predictions-section">
                            <div className="section-header-flex">
                                <h3 className="section-small-title">Recent Predictions</h3>
                                {predictions.length > 0 && <span className="view-history-link">View Prediction History &rarr;</span>}
                            </div>

                            {predictions.length > 0 ? (
                                <div className="predictions-grid">
                                    {predictions.slice(0, 4).map((item, idx) => (
                                        <div key={idx} className="prediction-card">
                                            <div className="prediction-header">
                                                <div className="college-info">
                                                    <h4>{item.college}</h4>
                                                    <span className="prediction-date">{item.date}</span>
                                                </div>
                                                <span className={`chance-badge chance-${item.chance.toLowerCase()}`}>
                                                    {item.chance}
                                                </span>
                                            </div>
                                            <div className="prediction-details">
                                                <div className="detail-item">
                                                    <span className="detail-label">Score</span>
                                                    <span className="detail-value">{item.score}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="detail-label">Rank</span>
                                                    <span className="detail-value">{item.rank}</span>
                                                </div>
                                            </div>
                                            <button className="view-btn-text">View Report</button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // Empty State
                                <div className="empty-state">
                                    <div className="empty-icon">📝</div>
                                    <h3>You haven’t made any predictions yet</h3>
                                    <p>Start your first prediction to see your college chances.</p>
                                    <button className="btn-primary-small" onClick={() => navigate('/predict')}>Start Prediction</button>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="dashboard-right-col">
                        
                        {/* 2. Profile Snapshot */}
                        <div className="sidebar-card profile-snapshot">
                            <h3>Profile Snapshot</h3>
                            <div className="snapshot-content">
                                <div className="snapshot-row">
                                    <span className="label">Exam</span>
                                    <span className="value">JEE Mains</span>
                                </div>
                                <div className="snapshot-row">
                                    <span className="label">Latest Score</span>
                                    <span className="value">98.5%</span>
                                </div>
                                <div className="snapshot-row">
                                    <span className="label">Preference</span>
                                    <span className="value">Govt. Colleges</span>
                                </div>
                                <div className="snapshot-row">
                                    <span className="label">Research</span>
                                    <span className="value">Yes</span>
                                </div>
                            </div>
                            <button className="edit-profile-btn">Edit Profile</button>
                        </div>

                        {/* 3. Prediction Overview */}
                        <div className="sidebar-card prediction-stats">
                            <h3>Prediction Overview</h3>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-number high">{predictionStats.high}</span>
                                    <span className="stat-label">High Chance</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number medium">{predictionStats.medium}</span>
                                    <span className="stat-label">Medium</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number low">{predictionStats.low}</span>
                                    <span className="stat-label">Low</span>
                                </div>
                            </div>
                        </div>

                        {/* 4. Improvement Tips */}
                        <div className="sidebar-card improvement-tips">
                            <h3>How to Improve</h3>
                            <ul className="tips-list">
                                <li>
                                    <span className="tip-icon">📈</span>
                                    <div className="tip-text">
                                        <strong>Improve CGPA</strong>
                                        <p>Focus on upcoming semesters to boost your profile.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="tip-icon">✍️</span>
                                    <div className="tip-text">
                                        <strong>Strengthen SOP</strong>
                                        <p>Highlight your projects and research work.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Dashboard;
