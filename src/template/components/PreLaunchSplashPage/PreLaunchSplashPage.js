import React from 'react';
import Hero from './Hero/Hero';
import './PreLaunchSplashPage.css';
import ValueProp from './ValueProp/ValueProp';
import CTA from './CTA/CTA';
import Benefits from './Benefits/Benefits';
import background from '../../assets/ocean.jpg';

function PreLaunchSplashPage() {
  const backgroundStyles = {
    "backgroundImage": `url(${background})`,
    "backgroundSize": "cover",
  }

  return (
    <div style={backgroundStyles} className='PreLaunchSplashPage'>
      <ValueProp className='PreLaunchSplashPage-ValueProp'/>
      <Hero className='PreLaunchSplashPage-Hero'/>
      <div className='PreLaunchSplashPage-CTA-and-Benefits'>
        <CTA className='PreLaunchSplashPage-CTA'/>
        <Benefits className='PreLaunchSplashPage-Benefits'/>
      </div>
    </div>
  )
}

export default PreLaunchSplashPage