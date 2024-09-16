import React from 'react'
import HeroTemplate from '../../components/HeroTemplate/HeroTemplate'
import AuthorsFunctionality from './AuthorsFunctionality/AuthorsFunctionality'
import authors_background from "/images/background/authors_background.jpeg"

const Authors = () => {
  return (
    <div className='authors-container'>
        <HeroTemplate 
            hero_background={authors_background} 
            hero_title={"Meet the Minds Behind the Insights"} 
            hero_description={"Explore the brilliant minds shaping the world of personal growth, self-improvement, and mental wellness."}
        />
        <AuthorsFunctionality />
    </div>
  )
}

export default Authors