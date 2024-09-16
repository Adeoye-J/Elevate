import React, { useState, useContext, useEffect } from 'react'
import AuthorsList from '../../../components/AuthorsList/AuthorsList'
import { BlogContext } from '../../../BlogContext/BlogContext'
import "./authorsFunctionality.scss"

const AuthorsFunctionality = () => {

    const {all_blogs} = useContext(BlogContext)
    const [filteredAuthors, setFilteredAuthors] = useState(all_blogs)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        let data = all_blogs

        if (searchQuery) {
            data = data.filter((blog) => blog.author.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredAuthors(data);
    }, [searchQuery])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    };


    return (
        <div className='authors-functionality-container'>

            <div className='filter-section'>
                <h3>Search For Authors</h3>
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </div>

            <div className="authors-functionality-content">
                <AuthorsList authors_data={filteredAuthors} />
            </div>
        </div>
    )
}

export default AuthorsFunctionality