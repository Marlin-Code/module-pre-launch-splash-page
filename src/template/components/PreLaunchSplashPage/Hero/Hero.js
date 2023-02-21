import React from 'react'
import heroVideo from '../../../assets/marlin-demo.mp4';

const styles = {
  boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, .5)',
  width: '100%',
  borderRadius: '10px',
}

function Hero( {className} ) {
  return (
    <div className={className}>
      <video style={styles} autoPlay muted loop>
        <source src={heroVideo} type="video/mp4"/>
      </video>
    </div>
  )
}

export default Hero