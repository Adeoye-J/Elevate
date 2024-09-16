import React, { createContext, useState } from 'react'
import blog_data from "../blog.json"

export const BlogContext = createContext()

export const BlogProvider = ({children}) => {
    const all_blogs = blog_data["blogs"]
    const [selectedBlogId, setSelectedBlogId] = useState(null)

    return (
        <BlogContext.Provider 
            value={{
                all_blogs, 
                selectedBlogId, 
                setSelectedBlogId
            }}
        >
            {children}
        </BlogContext.Provider>
    )
}