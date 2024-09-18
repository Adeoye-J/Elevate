import React from 'react'
import Hero from '../../components/Hero/Hero'
import "./home.scss"
import Newsletter from '../../components/Newsletter/Newsletter'
import MainContent from '../../components/MainContent/MainContent'

const Home = () => {

  return (
    <div className='home-container'>
      <Hero />
      <MainContent />
      <Newsletter />
    </div>
  )
}

export default Home