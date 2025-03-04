import React, { useState, useEffect } from 'react';
import './styles.css';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation
    if (email && password) {
      onLogin();
    } else {
      setError('Please enter both email and password');
    }
  };

  useEffect(() => {
    // Create grid of dots
    const createDots = () => {
      const newDots = [];
      const spacing = 30;
      for (let i = 0; i < window.innerWidth / spacing; i++) {
        for (let j = 0; j < window.innerHeight / spacing; j++) {
          newDots.push({
            x: i * spacing,
            y: j * spacing,
            opacity: 0.2
          });
        }
      }
      setDots(newDots);
    };

    createDots();
    window.addEventListener('resize', createDots);
    return () => window.removeEventListener('resize', createDots);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="login-container"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Dots */}
      <div className="dots-container">
        {dots.map((dot, i) => {
          const distance = Math.sqrt(
            Math.pow(dot.x - mousePosition.x, 2) + 
            Math.pow(dot.y - mousePosition.y, 2)
          );
          const opacity = Math.max(0.2, 1 - distance / 200);
          
          return (
            <div
              key={i}
              className="dot"
              style={{
                left: dot.x,
                top: dot.y,
                opacity: opacity,
                transform: `scale(${opacity})`
              }}
            />
          );
        })}
      </div>

      <div className="login-card">
        <h2>Trading Platform Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;