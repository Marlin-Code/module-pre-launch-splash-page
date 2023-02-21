import React from 'react'

const styles = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "16px",
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  color: '#17124E',
  borderRadius: '10px',
  boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.5)',
}
const headerStyles = {
  "fontSize": "1.25em",
  "fontWeight": "bold",
  "margin": 0
}
const contentStyles = {
  "fontSize": "1em",
  "margin": 0,
  "fontWeight": "regular",
}


function BenefitsCard( {className, benefitHeadline, benefitContent} ) {
  return (
    <div style={styles} className={className}>
      <h3 style={headerStyles}>{benefitHeadline}</h3>
      <p style={contentStyles}>{benefitContent}</p>
    </div>
  )
}

export default BenefitsCard