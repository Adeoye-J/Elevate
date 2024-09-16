import React from 'react'
import AuthorsItem from '../AuthorsItem/AuthorsItem'
import "./authorsList.scss"
import { Link } from 'react-router-dom'

const AuthorsList = ({authors_data}) => {

    const authors_array = []
    authors_data.forEach((data) => {
        if (!authors_array.some((item) => item.author.name === data.author.name)) {
            authors_array.push(data);
        }
    });


  return (
    <div className='authors-list-container'>
        <div className="authors-list-content">
            {authors_array.map((data) => (
                <Link to={"/authors-details"}>
                    <AuthorsItem name={data.author.name} profile_image={data.author.profile_image} id={data.id} />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default AuthorsList