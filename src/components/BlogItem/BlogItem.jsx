import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext/BlogContext'
import "./blogItem.scss"

const BlogItem = ({id, featured_image, is_popular, is_latest, title, category, name, profile_image, published_date}) => {

    const {setSelectedBlogId} = useContext(BlogContext)

    return (
        <div className='single-blog-container' onClick={() => setSelectedBlogId(id)}>
            <div className="single-blog-card">
                <div className="featured-image">
                    <img src={featured_image} alt="featured-image" />
                    {is_popular && <p>Popular</p>}
                    {is_latest && <p>Latest</p>}
                </div>
                <div className="featured-details">
                    <h4>{title}</h4>
                    <div className='author-info'>
                        <div className="profile-img">
                            <img src={profile_image} alt="profile-image" />
                        </div>
                        <p>{name}</p>
                    </div>
                    <div className="other-details">
                        <p>Category: {category}</p>
                        <p>Published: {published_date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem