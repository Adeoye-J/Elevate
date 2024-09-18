import React, { createContext, useState } from 'react'
import blog_data from "../blog.json"

export const BlogContext = createContext()

export const BlogProvider = ({children}) => {
    const all_blogs = blog_data["blogs"]
    const [selectedBlogId, setSelectedBlogId] = useState(null)
    const [selectedAuthorId, setSelectedAuthorId] = useState(null)
    const [wishlist, setWishlist] = useState([])

    const handleAddWishlist = () => {
        const itemWished = all_blogs.find((blog) => blog.id === selectedBlogId)
        setWishlist(prevWishlist => [...prevWishlist, itemWished])
    }

    const handleRemoveWishlist = () => {
        const remainingWishlist = wishlist.filter((blog) => blog.id !== selectedBlogId)
        setWishlist(remainingWishlist)
    }

    return (
        <BlogContext.Provider 
            value={{
                all_blogs, 
                selectedBlogId, 
                setSelectedBlogId,
                selectedAuthorId,
                setSelectedAuthorId,
                wishlist,
                handleAddWishlist,
                handleRemoveWishlist
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}