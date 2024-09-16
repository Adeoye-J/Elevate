import React, { useContext } from 'react'
import { BlogContext } from '../../BlogContext/BlogContext'

const BlogItemDetails = () => {

    const {data, selectedBlogId} = useContext(BlogContext)

    const blog_item = data.find((item) => item.id === selectedBlogId)

  return (
    <div className='blog-item-details-container'>
        <div className="blog-item-details-content">
          <div className="featured-image">
            <img src={blog_item.featured_image} alt="featured-image" />
          </div>
        </div>
    </div>
  )
}

export default BlogItemDetails