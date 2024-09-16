import React from 'react'
import HeroTemplate from '../../components/HeroTemplate/HeroTemplate'
import blog_image from '/images/background/blog_hero.jpg'
import './blogs.scss'
import BlogFunctionality from './BlogFunctionality/BlogFunctionality'

const Blogs = () => {

  return (
    <div className='blogs-container'>
        {/* Hero Section */}
        <HeroTemplate 
            hero_background={blog_image}
            hero_description={"Explore insights and tips for personal growth and self-improvement."} 
            hero_title={"Elevate Your Mind, Empower Your Life"}
        />

        {/* Main Section */}
        <BlogFunctionality />
    </div>
  );
};

export default Blogs;
