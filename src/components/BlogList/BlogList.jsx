import React, {useState} from 'react'
import BlogItem from '../BlogItem/BlogItem'
import "./blogList.scss"
import { Link } from 'react-router-dom';

const BlogList = ({blog_data}) => {

    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const postsPerPage = 5; // Number of items per page

    // Calculate total pages
    const totalPages = Math.ceil(blog_data.length / postsPerPage);

    // Get current blogs
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentBlogs = blog_data.slice(indexOfFirstPost, indexOfLastPost);

    // Pagination range logic
    const paginationRange = () => {
        const range = [];
        const maxPagesToShow = 3; // Number of page numbers to show at the center

        if (totalPages <= maxPagesToShow) {
            // If total pages are less than or equal to maxPagesToShow, show all pages
            for (let i = 1; i <= totalPages; i++) {
                range.push(i);
            }
        } else {
            // Always show the first page
            range.push(1);

            if (currentPage > maxPagesToShow) {
                range.push('...');
            }

            // Show pages around the current page
            const startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
            const endPage = Math.min(totalPages - 1, currentPage + Math.floor(maxPagesToShow / 2));

            for (let i = startPage; i <= endPage; i++) {
                range.push(i);
            }

            if (currentPage < totalPages - Math.floor(maxPagesToShow / 2)) {
                range.push('...');
            }

            // Always show the last page
            range.push(totalPages);
        }

        return range;
    };

    const handlePageChange = (page) => {
        if (page === '...') return;
        setCurrentPage(page);
    };

    return (
        <div className='blog-list-container'>
            <div className="blog-list-content">
                {currentBlogs.map((data) => (
                    // <Link to={"/blog-details"} key={data.id} style={{textDecoration: "none"}} className="blog-item-link">
                        <BlogItem category={data.category} featured_image={data.featured_image} is_latest={data.is_latest} is_popular={data.is_popular} name={data.author.name} profile_image={data.author.profile_image} published_date={data.published_date} title={data.title} excerpt={data.excerpt} id={data.id}  />
                    // </Link>
                ))}


            </div>

            {/* Pagination Controls */}
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {paginationRange().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        className={page === currentPage ? 'active' : ''}
                        disabled={page === '...'}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default BlogList