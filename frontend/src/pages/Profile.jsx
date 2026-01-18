import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Auth.css'; // Reusing some auth styles for the profile card look

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) return null;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <div style={{ flex: 1, padding: '80px 20px', background: '#fffcf5' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
                        <div style={{ 
                            width: '120px', 
                            height: '120px', 
                            borderRadius: '50%', 
                            background: 'var(--primary-gradient)', 
                            color: 'white', 
                            fontSize: '48px', 
                            fontWeight: 'bold', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            margin: '0 auto 30px',
                            boxShadow: '0 10px 20px rgba(255, 140, 0, 0.2)'
                        }}>
                            {user.fullName[0].toUpperCase()}
                        </div>
                        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>{user.fullName}</h2>
                        <p style={{ color: 'var(--text-light)', fontSize: '18px', marginBottom: '40px' }}>{user.email}</p>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left' }}>
                            <div style={{ background: '#fcfcfc', padding: '20px', borderRadius: '15px', border: '1px solid #f0f0f0' }}>
                                <p style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '5px' }}>Member Status</p>
                                <p style={{ fontWeight: '700', color: '#333' }}>Active Member</p>
                            </div>
                            <div style={{ background: '#fcfcfc', padding: '20px', borderRadius: '15px', border: '1px solid #f0f0f0' }}>
                                <p style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', marginBottom: '5px' }}>Account Role</p>
                                <p style={{ fontWeight: '700', color: '#333', textTransform: 'capitalize' }}>{user.role}</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '40px' }}>
                            <button className="btn-primary" style={{ width: '200px' }}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
