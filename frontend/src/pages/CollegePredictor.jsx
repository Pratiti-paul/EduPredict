import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPrediction } from '../services/predictService';
import './CollegePredictor.css';

const CollegePredictor = () => {
    const [formData, setFormData] = useState({
        year: '2023',
        institute_type: 'IIT',
        round_no: '6',
        category: 'OPEN',
        opening_rank: '',
        is_preparatory: false
    });
    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setPrediction(null);

        try {
            const result = await getPrediction({
                year: parseInt(formData.year),
                institute_type: formData.institute_type,
                round_no: parseInt(formData.round_no),
                category: formData.category,
                opening_rank: parseFloat(formData.opening_rank),
                is_preparatory: formData.is_preparatory ? 1 : 0
            });
            setPrediction(result.predicted_cutoff);
        } catch (err) {
            console.error(err);
            setError('Failed to get prediction. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-wrapper">
            <Navbar />
            <div className="predictor-container">
                <div className="predictor-header">
                    <h1>Predict Your Future College</h1>
                    <p>Enter your details below to see your chances.</p>
                </div>

                <div className="predictor-content">
                    <div className="predictor-card">
                        <form onSubmit={handleSubmit} className="form-grid">
                            <div className="form-group">
                                <label className="label">Year</label>
                                <select name="year" value={formData.year} onChange={handleChange} className="input-field">
                                    {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017].map(y => (
                                        <option key={y} value={y}>{y}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label">Institute Type</label>
                                <select name="institute_type" value={formData.institute_type} onChange={handleChange} className="input-field">
                                    <option value="IIT">IIT</option>
                                    <option value="NIT">NIT</option>
                                    <option value="IIIT">IIIT</option>
                                    <option value="GFTI">GFTI</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label">Round No</label>
                                <select name="round_no" value={formData.round_no} onChange={handleChange} className="input-field">
                                    {[1, 2, 3, 4, 5, 6].map(r => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label">Category</label>
                                <select name="category" value={formData.category} onChange={handleChange} className="input-field">
                                    <option value="OPEN">OPEN</option>
                                    <option value="EWS">EWS</option>
                                    <option value="OBC-NCL">OBC-NCL</option>
                                    <option value="SC">SC</option>
                                    <option value="ST">ST</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label">Your Rank</label>
                                <input 
                                    type="number" 
                                    name="opening_rank"
                                    className="input-field" 
                                    placeholder="e.g. 1500" 
                                    value={formData.opening_rank}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group checkbox-group">
                                <label className="label">
                                    <input 
                                        type="checkbox" 
                                        name="is_preparatory"
                                        checked={formData.is_preparatory}
                                        onChange={handleChange}
                                    />
                                    Is Preparatory?
                                </label>
                            </div>

                            <button type="submit" className="btn-primary predict-btn" disabled={loading}>
                                {loading ? 'Analyzing...' : 'Get Prediction'}
                            </button>
                        </form>

                        {error && <div className="error-message">{error}</div>}

                        {prediction !== null && (
                            <div className="result-card">
                                <h3>Predicted Closing Rank</h3>
                                <div className="prediction-value">{prediction}</div>
                                <p className="prediction-note">Based on your inputs, this is the estimated cutoff rank.</p>
                            </div>
                        )}
                    </div>

                    <div className="info-sidebar">
                        <div className="info-card">
                            <h3>🔍 How we predict?</h3>
                            <p>We use historical cutoff data from 2016-2023 and machine learning models to estimate cutoffs based on trends.</p>
                        </div>
                        <div className="info-card">
                            <h3>📊 Input Tips</h3>
                            <ul className="info-list">
                                <li><strong>Rank:</strong> Enter your category rank if applicable.</li>
                                <li><strong>Round:</strong> Later rounds generally have higher cutoffs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CollegePredictor;
