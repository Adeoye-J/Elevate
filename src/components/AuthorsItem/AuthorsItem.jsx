import React, { useContext } from 'react'
import "./authorsItem.scss"
import { BlogContext } from '../../BlogContext/BlogContext'

const AuthorsItem = ({id, profile_image, name}) => {

    const {setSelectedAuthorId} = useContext(BlogContext)

    return (
        <div className='authors-item-container' onClick={() => setSelectedAuthorId(id)}>
            <div className="featured-details">
                <div className="img">
                    <img src={profile_image} alt="profile-image" />
                </div>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default AuthorsItem