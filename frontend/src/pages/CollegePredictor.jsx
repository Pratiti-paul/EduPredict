import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CollegePredictor.css';

const CollegePredictor = () => {
    const [score, setScore] = useState('');
    const [rank, setRank] = useState('');

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="predictor-container">
                <div className="predictor-header">
                    <h1>Predict Your Future College</h1>
                    <p>Enter your details below to see your best matches.</p>
                </div>

                <div className="predictor-content">
                    <div className="predictor-card">
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="label">Entrance Exam Score</label>
                                <input 
                                    type="number" 
                                    className="input-field" 
                                    placeholder="e.g. 95.5" 
                                    value={score}
                                    onChange={(e) => setScore(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label">Category Rank</label>
                                <input 
                                    type="number" 
                                    className="input-field" 
                                    placeholder="e.g. 1500" 
                                    value={rank}
                                    onChange={(e) => setRank(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="btn-primary predict-btn">Get Predictions</button>
                    </div>

                    <div className="info-sidebar">
                        <div className="info-card">
                            <h3>🔍 How we predict?</h3>
                            <p>We use historical cutoff data and AI models to estimate your chances across hundreds of colleges.</p>
                        </div>
                        <div className="info-card">
                            <h3>📊 Data Accuracy</h3>
                            <p>Our data is updated regularly based on official counseling reports and university admissions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CollegePredictor;
