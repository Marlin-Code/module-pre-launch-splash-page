import React, { useState } from 'react';
import {
  CTA_ACTION_TEXT,
  CTA_FORM_PLACEHOLDER_TEXT,
  CTA_SUBMIT_TEXT,
  CTA_THANK_YOU_TEXT,
} from '../constants';
import './CTA.css';


function CTA( {className} ) {
  
  const textStyles = {
    "lineHeight": "1.5em",
    "fontWeight": "bold",
    "color": "#17124E",
    "fontSize": "1.5em",
    "textAlign": "left",
    "textShadow": "0 0 0.5px #fff"
  }


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
    <div className={className}>
      { subscribed ? (
          <p style={textStyles}>
            {CTA_THANK_YOU_TEXT}
          </p>
        ) : (
          <div>
            <p style={textStyles}>
              {CTA_ACTION_TEXT}
            </p>
            <form className="CTA-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder={CTA_FORM_PLACEHOLDER_TEXT}
                value={email}
                onChange={handleChange}
                required
                />
              <button type="submit">{CTA_SUBMIT_TEXT}</button>
            </form>
          </div>
        )}
    </div>
  )
}

export default CTA