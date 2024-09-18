import React, {useContext} from 'react'
import "./wishlist.scss"
import { BlogContext } from '../../BlogContext/BlogContext'
import BlogList from '../BlogList/BlogList'
import { Link } from 'react-router-dom'
import HeroTemplate from '../HeroTemplate/HeroTemplate'
import wishlistBackground from "/images/background/wishlist-background.jpg"

const Wishlist = () => {

    const {wishlist} = useContext(BlogContext)

    return (
    <>
        <HeroTemplate hero_background={wishlistBackground} hero_description={"Curate, save, and revisit your favorite blog posts anytime."} hero_title={"Your Personalized Collection Awaits"} />
        <div className='wishlist'>
            <h1>Wishlist</h1>
            {
                wishlist.length
                ? <BlogList blog_data={wishlist} />
                : <p>Nothing Here, Add to View</p>
            }
            <Link to={"/blogs"} className='explore' style={{textDecoration: "none"}}>
                <button>Explore Blogs</button>
            </Link>
        </div>
    </>
    )
}

export default Wishlist