import React from 'react';
import './css/HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            id: '01',
            title: 'Enter Details',
            description: 'You provide basic academic information.',
            icon: '📝'
        },
        {
            id: '02',
            title: 'Profile Analysis',
            description: 'We analyze your profile using past admission trends.',
            icon: '⚙️'
        },
        {
            id: '03',
            title: 'Admission Chance',
            description: 'You receive an estimated admission probability.',
            icon: '📊'
        },
        {
            id: '04',
            title: 'Insights',
            description: 'We suggest ways to improve your chances.',
            icon: '💡'
        }
    ];

    return (
        <section className="hiw-section">
            <div className="hiw-container">
                <div className="hiw-header">
                    <h2 className="hiw-title">How It Works</h2>
                    <p className="hiw-subtitle">Your journey to the perfect college in four simple steps.</p>
                </div>

                <div className="timeline-wrapper">
                    <div className="timeline-line"></div>
                    <div className="timeline-steps">
                        {steps.map((step, index) => (
                            <div key={index} className="timeline-step">
                                <div className="step-badge">{step.id}</div>
                                <div className="step-icon-circle">
                                    <span className="step-icon">{step.icon}</span>
                                </div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-desc">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="why-this-works">
                    <h3 className="wtw-title">Why This Works</h3>
                    <p className="wtw-desc">
                        Our predictions are based on patterns learned from real student admission data, helping you understand your chances realistically.
                    </p>
                    <ul className="wtw-bullets">
                        <li>Uses historical admission trends</li>
                        <li>Data-driven & unbiased</li>
                        <li>Designed for guidance, not guarantees</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
