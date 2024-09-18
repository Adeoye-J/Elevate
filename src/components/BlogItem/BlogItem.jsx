import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext/BlogContext'
import { Link } from 'react-router-dom'
import "./blogItem.scss"

const BlogItem = ({id, excerpt, featured_image, is_popular, is_latest, title, category, name, profile_image, published_date}) => {

    const {setSelectedBlogId, setSelectedAuthorId} = useContext(BlogContext)

    return (
        <div className='single-blog-container'>
            <div className="single-blog-card">
                <div className="featured-image">
                    <img src={featured_image} alt="featured-image" />
                    {is_popular && <p>Popular</p>}
                    {is_latest && <p>Latest</p>}
                </div>
                <div className="featured-details">
                    <Link to={`/blogs/${id}`} onClick={() => setSelectedBlogId(id)} style={{textDecoration: "none"}}>
                        <h4>{title}</h4>
                    </Link>
                    <div className="excerpt">
                        <p>{excerpt}</p>
                    </div>
                    <div className='author-info'>
                        <div className="profile-img">
                            <img src={profile_image} alt="profile-image" />
                        </div>
                        <Link to={"/authors-details"} onClick={() => setSelectedAuthorId(id)} style={{textDecoration: "none"}}>
                            <p>{name}</p>
                        </Link>
                    </div>
                    <div className="other-details">
                        <p>Category: <span>{category}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem