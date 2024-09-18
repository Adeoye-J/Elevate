import React, { useContext } from 'react'
import "./sidePanel.scss"
import { BlogContext } from '../../../BlogContext/BlogContext'
import { Link } from 'react-router-dom'

const SidePanel = ({latest_slice, popular_slice}) => {

    const {all_blogs, setSelectedBlogId, setSelectedAuthorId} = useContext(BlogContext)

    const latest_blogs = all_blogs.filter((blog) => blog.is_latest === true).slice(0, latest_slice)
    const popular_blogs = all_blogs.filter((blog) => blog.is_popular === true).slice(0, popular_slice)

    return (
        <div className='sidepanel-container'>
            <div className="blogs">
                <h2>Latest Blogs</h2>
                {latest_blogs.map((blog) => (
                    <div className="blog-content">
                        <div className="blog-image">
                            <img src={blog.featured_image} alt="featured-image" />
                        </div>
                        <div className="details">
                            <Link to={`/blogs/${blog.id}`} onClick={() => setSelectedBlogId(blog.id)} style={{textDecoration: "none"}}>
                                <h3>{blog.title}</h3>
                            </Link>
                            
                            <p>
                                Written By: 
                                <Link to={"/authors-details"} onClick={() => setSelectedAuthorId(blog.id)} style={{textDecoration: "none"}}>
                                    <span>{blog.author.name}</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="blogs">
                <h2>Popular Blogs</h2>
                {popular_blogs.map((blog) => (
                    <div className="blog-content">
                        <div className="blog-image">
                            <img src={blog.featured_image} alt="featured-image" />
                        </div>
                        <div className="details">
                            <Link to={`/blogs/${blog.id}`} onClick={() => setSelectedBlogId(blog.id)} style={{textDecoration: "none"}}>
                                <h3>{blog.title}</h3>
                            </Link>
                            
                            <p>
                                Written By: 
                                <Link to={"/authors-details"} onClick={() => setSelectedAuthorId(blog.id)} style={{textDecoration: "none"}}>
                                    <span>{blog.author.name}</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SidePanel