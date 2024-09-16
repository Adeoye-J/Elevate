import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext/BlogContext'
import {FaTwitter, FaGlobe} from "react-icons/fa"
import BlogList from '../BlogList/BlogList'
import HeroTemplate from '../HeroTemplate/HeroTemplate'
import authors_background from "/images/background/authors_background.jpeg"
import "./authorsDetails.scss"

const AuthorsDetails = () => {

    const {all_blogs, selectedAuthorId} = useContext(BlogContext)
    const author = all_blogs.find((data) => data.id === selectedAuthorId).author

    const filtered_author_blog = all_blogs.filter((data) => data.author.name === author.name)

    return (
        <>
            <HeroTemplate 
                hero_background={authors_background} 
                hero_title={"Meet the Minds Behind the Insights"} 
                hero_description={"Explore the brilliant minds shaping the world of personal growth, self-improvement, and mental wellness."}
            />
            <div className='container authors-details-container'>
                <div className="authors-details-content">
                    <div className="featured-image">
                        <img src={author.profile_image} alt="author" />
                    </div>
                    <h1>{author.name}</h1>
                    <p>{author.bio}</p>
                    <div className="social-links">
                        <div className="icons">
                            <div className="icon-con">
                                <FaTwitter className='icon' />
                            </div>
                            <div className="icon-con">
                                <FaGlobe className='icon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books-by-author">
                    <h2>Blog(s) By Author: </h2>
                    <BlogList blog_data={filtered_author_blog} />
                </div>
            </div>
        </>
    )
}

export default AuthorsDetails