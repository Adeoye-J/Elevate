import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext/BlogContext'
import SidePanel from './SidePanel/SidePanel'
import { Link } from 'react-router-dom'
import "./blogItemDetails.scss"

const BlogItemDetails = () => {

  const {all_blogs, selectedBlogId, setSelectedAuthorId} = useContext(BlogContext)

  const blog_item = all_blogs.find((item) => item.id === selectedBlogId)

  return (
    <div className='blog-item-details-container'>
      <div className="blog-item-details-content">
        <h2>{blog_item.title}</h2>
        <p className='author'>Written By:
          <Link to={"/authors-details"} onClick={() => setSelectedAuthorId(blog_item.id)} style={{textDecoration: "none"}}>
            <span>{blog_item.author.name}</span>
          </Link>
        </p>
        <p className='published'>Last Updated <span>{blog_item.published_date}</span></p>
        <div className="featured-image">
          <img src={blog_item.featured_image} alt="featured-image" />
        </div>
        <p className='excerpt'>{blog_item.excerpt}</p>
        <p className='content'>{blog_item.content}</p>
      </div>
      <div className="side-item-content">
        <SidePanel />
      </div>
    </div>
  )
}

export default BlogItemDetails