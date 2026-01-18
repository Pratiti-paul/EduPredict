import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
           navigate('/login');
        } else {
           setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div>
            {/* Navigation */}
            <nav style={{ background: '#fff', borderBottom: '1px solid #eee', padding: '15px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '24px' }}>🎓</span>
                        <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#f57c00' }}>College Predictor</h1>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <a href="#" style={{ fontWeight: '500', color: '#f57c00' }}>Home</a>
                        <a href="#" style={{ fontWeight: '500', color: '#333' }}>Predictor</a>
                        <a href="#" style={{ fontWeight: '500', color: '#333' }}>About</a>
                        
                        {user ? (
                             <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#f57c00', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                    {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                                </div>
                                <span style={{ fontWeight: '500' }}>{user.fullName}</span>
                                <button onClick={handleLogout} style={{ fontSize: '12px', color: 'red', background: 'transparent' }}>Logout</button>
                             </div>
                        ) : (
                            <button className="btn-primary" style={{ width: 'auto', padding: '8px 20px' }}>Login</button>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ 
                background: 'linear-gradient(135deg, #fffcf5 0%, #ffffff 100%)', 
                padding: '80px 0', 
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <h1 style={{ fontSize: '56px', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', color: '#1a237e' }}>
                                Find Your Best Fit <br />
                                College with Our <br />
                                Predictor
                            </h1>
                            <p style={{ fontSize: '18px', color: '#757575', marginBottom: '40px', maxWidth: '480px' }}>
                                Get accurate predictions of the colleges you can get into based on your exam scores.
                            </p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <button className="btn-primary" style={{ width: 'auto', padding: '14px 32px' }}>Get Started</button>
                                <button style={{ 
                                    background: 'var(--white)', 
                                    border: '1px solid #ddd', 
                                    borderRadius: '8px',
                                    padding: '14px 32px',
                                    fontWeight: '600',
                                    color: '#333'
                                }}>Learn More</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                             {/* Abstract 3D shapes placeholder */}
                             <div style={{ fontSize: '150px' }}>🛡️</div>
                             <div style={{ fontSize: '150px' }}>🎓</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* How It Works */}
            <section style={{ padding: '80px 0', background: '#fff' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '10px', color: '#1a237e' }}>How It Works</h2>
                    <p style={{ color: '#757575', marginBottom: '60px' }}>Predict your college admission in three simple steps.</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        {[
                            { icon: '📝', title: '1. Enter Your Details', desc: 'Provide your exam scores, category, state preferences and more.' },
                            { icon: '📱', title: '2. Get Predictions', desc: 'Our advanced algorithm analyzes your data to predict the best fit colleges.' },
                            { icon: '📋', title: '3. View Results', desc: 'See a personalized list of colleges with admission chances.' }
                        ].map((step, idx) => (
                            <div key={idx} style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ 
                                    width: '100px', 
                                    height: '100px', 
                                    borderRadius: '50%', 
                                    border: '2px solid #f57c00', /* Gold/Orange */
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    fontSize: '40px',
                                    marginBottom: '20px',
                                    background: '#fff3e0'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>{step.title}</h3>
                                <p style={{ color: '#757575', lineHeight: '1.6' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Recent Predictions */}
             <section style={{ padding: '80px 0', background: '#fffcf5' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '40px', color: '#1a237e' }}>Recent Predictions</h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {[
                            { name: 'College A', dept: 'Computer Science', chance: 'High Chance', color: '#e8f5e9', textColor: '#2e7d32' },
                            { name: 'College B', dept: 'Electronics', chance: 'Medium Chance', color: '#fff3e0', textColor: '#ef6c00' }
                        ].map((college, idx) => (
                            <div key={idx} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{college.name}</h3>
                                    <p style={{ color: '#757575' }}>{college.dept}</p>
                                </div>
                                <span style={{ 
                                    background: college.color, 
                                    color: college.textColor, 
                                    padding: '8px 16px', 
                                    borderRadius: '20px', 
                                    fontSize: '14px', 
                                    fontWeight: '600' 
                                }}>
                                    {college.chance}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
