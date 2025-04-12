// LoginDashboard.js
import React, { useState } from 'react';
import { auth, googleProvider } from './firebase';
import { useHistory } from 'react-router-dom';
import './LoginDashboard.css'; // Create this CSS file for styling

const LoginDashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/dashboard'); // Redirect after successful login
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    
    try {
      await auth.signInWithPopup(googleProvider);
      history.push('/dashboard'); // Redirect after successful login
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Please login to your account</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleEmailLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="divider">OR</div>
        
        <button className="google-btn" onClick={handleGoogleLogin} disabled={loading}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
          Continue with Google
        </button>
        
        <div className="footer-links">
          <a href="/forgot-password">Forgot password?</a>
          <span>Don't have an account? <a href="/signup">Sign up</a></span>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;