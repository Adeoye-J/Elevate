import React from 'react'
import Hero from '../../components/Hero/Hero'
import "./home.scss"

const Home = () => {

  return (
    <div className='home-container'>
      <Hero />
      <select style={{marginBottom: "10rem"}} className='dropdown'>
        <option value="someOption">Some option</option>
        <option value="otherOption">Other option</option>
      </select>
    </div>
  )
}

export default Home