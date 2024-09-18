import React, {useContext} from 'react'
import SidePanel from '../BlogItemDetails/SidePanel/SidePanel'
import BlogList from '../BlogList/BlogList'
import { BlogContext } from '../../BlogContext/BlogContext'
import "./mainContent.scss"

const MainContent = () => {

    const {all_blogs} = useContext(BlogContext)

    const selected_blogs = all_blogs.slice(4, 8)

    return (
        <div className='main-content-container'>
            <div className="main-content">
                <h2>Learn From The Best Writers</h2>
                <BlogList blog_data={selected_blogs} />
            </div>
            <div className="side-container">
                <SidePanel latest_slice={3} popular_slice={3} />
            </div>
        </div>
    )
}

export default MainContent