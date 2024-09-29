
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()


  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/api/users?username=${username}&password=${password}`);
      if (response.data.rowid > 0) {
        alert('User already exists')
        setError('User already exists');
      } else {
        await axios.post('http://localhost:5000/api/users', { username, email,password });
        alert('Signup successful');
        navigate('/login');
      }
    } catch (err) {
      setError('Error signing up');
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div style={{display: "contents"}}>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{display: "contents"}}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{display: "contents"}}>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p>{error}</p>}
        <br />
        <br /> 
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between' }}>
        <button type="button" className='outlined-button'><a href='/login' style={{textDecoration:'none'}}>Login</a></button>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
