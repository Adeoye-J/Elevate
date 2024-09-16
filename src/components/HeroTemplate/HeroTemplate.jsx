import React from 'react'
import "./heroTemplate.scss"

const HeroTemplate = ({hero_background, hero_title, hero_description}) => {



    return (
        <div className='hero-template-container' style={{backgroundImage: `url(${hero_background})`}}>
            <div className="hero-template-content">
                <h1>{hero_title}</h1>
                <p>{hero_description}</p>
            </div>
        </div>
    )
}

export default HeroTemplate