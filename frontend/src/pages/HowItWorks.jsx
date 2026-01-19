import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './HowItWorks.css';
import HowItWorksSection from '../components/how-it-works/HowItWorks';

const HowItWorks = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <HowItWorksSection />
            <Footer />
        </div>
    );
};

export default HowItWorks;
