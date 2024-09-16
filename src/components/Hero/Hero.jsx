import React from 'react'
import "./hero.scss"

const Hero = () => {
  return (
    <div className='container hero-container'>
        <div className="content">
          <h1>Elevate Your Life, One Step at a Time</h1>
          <p>Join us on a journey of self-discovery, personal growth, and transformation. Explore insightful articles and actionable advice designed to help you reach your highest potential.</p>
          <div className="call-to-action">
            <button>Start Journey</button>
            <button className='alt-button'>Explore Articles</button>
          </div>
        </div>
    </div>
  )
}

export default Hero