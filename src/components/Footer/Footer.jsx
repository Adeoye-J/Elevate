import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
import {FaTwitter, FaFacebook, FaPinterest, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
          <div className="footer-info">
              <div className="logo">
                  <h1>Elevate</h1>
              </div>
              <div className="location">
                  <p>343 Locale Port</p>
                  <p>Drive FL 33458 USA</p>
                  <p>+0000 123 456 789</p>
                  <p>elevate@example.com</p>
              </div>
          </div>
          <div className="other-links">
            <h1>Help</h1>
            <ul className='list-items'>
              <Link to={"/home"} style={{textDecoration: "none"}}><li>Home</li></Link>
              <Link to={"/blogs"} style={{textDecoration: "none"}}><li>Blogs</li></Link>
              <Link to={"/wishlist"} style={{textDecoration: "none"}}><li>Wishlist</li> </Link>
              <Link to={"/authors"} style={{textDecoration: "none"}}><li>Author</li></Link>
              <Link to={"/contact"} style={{textDecoration: "none"}}><li>Contact</li></Link>
            </ul>
          </div>
        </div>
        <div className="footer-icons">
          <div className="icon-con">
            <FaTwitter className='icon' />
          </div>
          <div className="icon-con">
            <FaFacebook className='icon' />
          </div>
          <div className="icon-con">
            <FaPinterest className='icon' />
          </div>
          <div className="icon-con">
            <FaInstagram className='icon' />
          </div>
        </div>
    </div>
  )
}

export default Footer