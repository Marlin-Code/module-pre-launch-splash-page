import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className='LandingPage'>
      <div className='LandingPage-header'>
        <p className='LandingPage-name'>Marlin</p>
      </div>
      <div className='LandingPage-content'>
        <h1 className='LandingPage-title'>Lightning Fast MVPs<br/>Full Ownership of Code.</h1>
        { subscribed ? (
          <p className="LandingPage-subscribed">
            Thank you for subscribing! We'll keep you updated on our launch.
          </p>
        ) : (
          <form className="LandingPage-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email me when it's ready"
              value={email}
              onChange={handleChange}
              required
              />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default LandingPage