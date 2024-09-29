import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Modal from './Modal'; // Import the Modal component


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false); // State to control the modal
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/api/users?username=${username}&password=${password}`);
            if (response.data.rowid > 0) {                
                localStorage.setItem('userName',response.data.username)
                navigate('/home');
            } else {
                setError('Invalid username or password');
                setShowModal(true); // Show the modal on error
            }
        } catch (err) {
            setError('Error logging in');
            setShowModal(true); // Show the modal on error
        }
    };

    const closeModal = () => {
        setShowModal(false); // Close the modal
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={{ display: "contents" }}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div style={{ display: "contents" }}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <br />
                <br />
                <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
                    
                    <button type="button" className='outlined-button'>
                        <a href='/Signup' style={{  textDecoration: 'none' }}>Sign up</a>
                    </button>
                    <button type="submit">Login</button>
                </div>
            </form>

            {/* Include the Modal */}
            <Modal show={showModal} onClose={closeModal} message={error} />
        </div>
    );
}

export default Login;
