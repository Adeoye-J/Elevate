import React, { useContext, useState, useEffect } from 'react'
import { BlogContext } from '../../BlogContext/BlogContext'
import SidePanel from './SidePanel/SidePanel'
import { Link } from 'react-router-dom'
import "./blogItemDetails.scss"
import dummyImage from "/images/comment_img/dummy-img.jpg"
import HeroTemplate from '../HeroTemplate/HeroTemplate'
import detailsBackground from "/images/background/details-background.jpg"

const BlogItemDetails = () => {

  const {all_blogs, selectedBlogId, setSelectedAuthorId, wishlist, handleAddWishlist, handleRemoveWishlist} = useContext(BlogContext)

  const blog_item = all_blogs.find((item) => item.id === selectedBlogId)

  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState({
    fullName: '',
    comment: '',
    profileImage: null
  });

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments_${blog_item.id}`)) || [];
    setComments(storedComments);
  }, [blog_item.id]);

  useEffect(() => {
    localStorage.setItem(`comments_${blog_item.id}`, JSON.stringify(comments));
  }, [comments, blog_item.id]);
 
  const handleInputChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  };
 
  const handleFileChange = (e) => {
    setNewComment({ ...newComment, profileImage: e.target.files[0] });
  };
 
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newCommentObject = {
      id: comments.length + 1,
      fullName: newComment.fullName,
      comment: newComment.comment,
      profileImage: newComment.profileImage ? URL.createObjectURL(newComment.profileImage) : null,
      date: new Date().toLocaleDateString()
    };

    setComments([...comments, newCommentObject]);

    setNewComment({
      fullName: '',
      comment: '',
      profileImage: null
    });
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
  };

  const handleWishlist = () => {
    const itemIndex = wishlist.findIndex((wish) => wish.id === selectedBlogId)

    if (itemIndex !== -1) {
      handleRemoveWishlist()
    } else {
      handleAddWishlist()
    }
  }

  return (
    <>
      <HeroTemplate hero_background={detailsBackground} hero_description={`Deep Dive Into: "${blog_item.title}"`} hero_title={"Explore the Latest Insights"} />
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
          <button onClick={handleWishlist}>
            {wishlist.some((wish) => wish.id === selectedBlogId) ? "Remove From Wishlist" : "Add To Wishlist"}
          </button>

          <div className="comment-section">
          <div className="comment-output">
              <h1>Comments</h1>
              {comments.length > 0 ? comments.map((comment) => (
                <>
                  <div key={comment.id} className="comment-item">
                      <div className="profile-container">
                      {comment.profileImage ? 
                        <img src={comment.profileImage} alt="profile" className="comment-profile-image" />
                        : <img src={dummyImage} alt="dummy-img" />
                      }
                      </div>
                    <div className="comment-details">
                      <p><strong>{comment.fullName}</strong> on {comment.date}</p>
                      <p>{comment.comment}</p>                  
                      <button onClick={() => handleDeleteComment(comment.id)} className="delete-comment-btn">Delete</button>
                    </div>
                  </div>
                </>
              )) : <p>No comments yet. Be the first to comment!</p>}
            </div>
            <div className="comment-form-container">
              <h2>Leave a Comment</h2>
              <form onSubmit={handleFormSubmit} className='comment-form'>
                <label>
                  <p>Profile Image (Optional):</p>
                  <input 
                    type="file" 
                    name="profileImage"
                    placeholder='Profile Image' 
                    onChange={handleFileChange}
                  />
                </label>
                <label>
                  <p>Full Name:</p>
                  <input 
                    type="text" 
                    name='fullName'
                    placeholder='Full Name'
                    value={newComment.fullName}
                    onChange={handleInputChange}
                    required 
                  />
                </label>
                <label>
                  <p>Enter Comment:</p>
                  <textarea 
                    type="text" 
                    name='comment'
                    placeholder='Enter Comment' 
                    value={newComment.comment}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button type="submit">Submit Comment</button>
              </form>
            </div>
          </div>
        </div>
        <div className="side-item-content">
          <SidePanel latest_slice={4} popular_slice={4} />
        </div>
      </div>
    </>
  )
}

export default BlogItemDetails