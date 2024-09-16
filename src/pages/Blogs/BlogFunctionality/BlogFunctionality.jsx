import React, { useContext, useState, useEffect } from 'react'
import BlogList from '../../../components/BlogList/BlogList'
import { BlogContext } from '../../../BlogContext/BlogContext'
import './blogFunctionality.scss'

const BlogFunctionality = () => {

    const { all_blogs } = useContext(BlogContext)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedPopularity, setSelectedPopularity] = useState('All')
    const [selectedLatest, setSelectedLatest] = useState('All')
    const [filteredBlogs, setFilteredBlogs] = useState(all_blogs)

    useEffect(() => {
        let data = all_blogs

        if (searchQuery) {
        data = data.filter((blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            blog.author.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        }

        if (selectedCategory !== 'All') {
        data = data.filter((blog) => blog.category === selectedCategory)
        }

        if (selectedPopularity === 'Popularity') {
        data = data.filter((blog) => blog.is_popular === true)
        }

        if (selectedLatest === 'Latest') {
            data = data.filter((blog) => blog.is_latest === true)
        }

        setFilteredBlogs(data);
    }, [searchQuery, selectedCategory, selectedPopularity, selectedLatest, all_blogs])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    };

    const handlePopularityChange = (e) => {
        setSelectedPopularity(e.target.value)
    };

    const handleLatestChange = (e) => {
        setSelectedLatest(e.target.value)
    }

    return (
        <div className='blog-functionality-container'>
            {/* Main content with side navigation for filters */}
            <div className='blogs-content'>
                <aside className='filters-sidebar'>
                    <div className='filter-section'>
                        <h3>Search</h3>
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="search-bar"
                        />
                    </div>

                    <div className='filter-section'>
                        <h3>Category</h3>
                        <select onChange={handleCategoryChange} value={selectedCategory} className='filter-dropdown'>
                            <option value="All">All</option>
                            <option value="Personal Development">Personal Development</option>
                            <option value="Mental Strength">Mental Strength</option>
                            <option value="Self Awareness">Self Awareness</option>
                            <option value="Motivation">Motivation</option>
                            <option value="Emotional Intelligence">Emotional Intelligence</option>
                            <option value="Mindfulness">Mindfulness</option>
                            <option value="Mindset">Mindset</option>
                            <option value="Change Management">Change Management</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Confidence">Confidence</option>
                            <option value="Mental Clarity">Mental Clarity</option>
                            <option value="Digital Well-being">Digital Well-being</option>
                            <option value="Stress Management">Stress Management</option>
                            <option value="Mental Well-Being">Mental Well-Being</option>
                            <option value="Success Strategies">Success Strategies</option>
                            <option value="Resilience">Resilience</option>
                            <option value="Habits">Habits</option>
                            <option value="Goal Setting">Goal Setting</option>
                            <option value="Positive Thinking">Positive Thinking</option>
                        </select>
                    </div>

                    <div className='filter-section'>
                        <h3>Popularity</h3>
                        <select onChange={handlePopularityChange} value={selectedPopularity} className='filter-dropdown'>
                        <option value="All">All</option>
                        <option value="Popularity">Most Popular</option>
                        </select>
                    </div>

                    <div className='filter-section'>
                        <h3>Latest</h3>
                        <select onChange={handleLatestChange} value={selectedLatest} className='filter-dropdown'>
                        <option value="All">All</option>
                        <option value="Latest">Most Latest</option>
                        </select>
                    </div>
                </aside>

                {/* Blog List Section */}
                <section className='blogs-list-section'>
                    <BlogList blog_data={filteredBlogs} />
                </section>
            </div>
        </div>
    )
}

export default BlogFunctionality
