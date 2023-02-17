import React, { useState } from 'react';
import './PreLaunchSplashPage.css';

function PreLaunchSplashPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };
  const companyName = "Marlin"
  const headlineText = "Lightning Fast MVPS\n Full Ownership of Code"
  const formPlaceholderText = "Email me when it's ready"
  const thankYouText = "Thank you for subscribing! We'll keep you updated on our launch."

  return (
    <div className='PreLaunchSplashPage'>
      <div className='PreLaunchSplashPage-header'>
        <p className='PreLaunchSplashPage-name'>{companyName}</p>
      </div>
      <div className='PreLaunchSplashPage-content'>
        <h1 className='PreLaunchSplashPage-title'>{headlineText}</h1>
        { subscribed ? (
          <p className="PreLaunchSplashPage-subscribed">
            {thankYouText}
          </p>
        ) : (
          <form className="PreLaunchSplashPage-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={formPlaceholderText}
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

export default PreLaunchSplashPage