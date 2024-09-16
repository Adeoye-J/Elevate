import React, { useContext, useState } from 'react'
import "./header.scss"
import { Link } from 'react-router-dom'
import {FaHeart} from "react-icons/fa"
import {RiMenu3Line, RiCloseFill} from "react-icons/ri"

const NavBar = () => {

    const [menu, setMenu] = useState("")

    const handleClick = (menuName) => {
        setMenu(menuName)
        setShowMobileMenu(false)
    }
    
    // const {cartData, wishlist} = useContext(VBookContext)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    
    return (
        <div className='header container'>
            <div className="logo">
                <h1>Elevate</h1>
            </div>
            <div className={`${showMobileMenu ? "mobile-menu" : "main-menu"}`}>
                <ul className="list-items">
                    <div className='menu-container'>
                        <li onClick={() => handleClick("Home")} ><Link className={`list-item ${menu === "Home" && "underline"}`} to={"/home"}>Home</Link></li>
                        <li onClick={() => handleClick("Blog")} ><Link className={`list-item ${menu === "Blog" && "underline"}`} to={"/blogs"}>Blog</Link></li>
                        <li onClick={() => handleClick("Categories")} ><Link className={`list-item ${menu === "Categories" && "underline"}`} to={""}>Categories</Link></li>
                        <li onClick={() => handleClick("Authors")} ><Link className={`list-item ${menu === "Authors" && "underline"}`} to={""}>Authors</Link></li>
                        <li onClick={() => handleClick("Contact")} ><Link className={`list-item ${menu === "Contact" && "underline"}`} to={""}>Contact</Link></li>
                    </div>
                    {/* <Menu setShowMobileMenu={setShowMobileMenu} /> */}
                    <div className="icon-con close-icon">
                        <Link className='icon-link' onClick={() => setShowMobileMenu(false)}><RiCloseFill className='icon' /></Link>
                    </div>
                </ul>
            </div>
            <div className="icons">
                <Link className='icon-con' to={""}>
                    <FaHeart className='icon' /> 
                    {/* {wishlist.length > 0 && <div className="item-no">{wishlist.length}</div>} */}
                </Link>
                <Link to={""}><button>Login</button></Link>
                <div className="icon-con menu-icon">
                    <Link className='icon-link' onClick={() => setShowMobileMenu(true)} ><RiMenu3Line className='icon' /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
