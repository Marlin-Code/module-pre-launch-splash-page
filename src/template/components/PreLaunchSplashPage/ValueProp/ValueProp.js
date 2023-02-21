import React from 'react'
import {VALUE_PROP_HEADLINE, VALUE_PROP_SUBHEADLINE} from '../constants'

const headlineStyles = {
  "lineHeight": "1em",
  "fontWeight": "bold",
  "color": "#17124E",
  "fontSize": "3em",
  "textAlign": "center",
}

const subHeadlineStyles = {
  "lineHeight": "1em",
  "color": "#17124E",
  "fontSize": "1.5em",
  "textAlign": "center",
}

function ValueProp( {className} ) {
  return (
    <div className={className}>
      <h1 style={headlineStyles}>{VALUE_PROP_HEADLINE}</h1>
      <h3 style={subHeadlineStyles}>{VALUE_PROP_SUBHEADLINE}</h3>
    </div>
  )
}

export default ValueProp