import React from 'react'
import BenefitsCard from './BenefitsCard'
import './Benefits.css'
import { BENEFITS } from '../constants'


function Benefits( {className} ) {
  return (
    <div className={`${className} benefits-card-container`}>
      {BENEFITS.map((benefit, index) =>
        <BenefitsCard
          key={index}
          {...benefit}/>)}
    </div>
  )
}

export default Benefits