import React from 'react'

export default function BookCard({bookCard}) {
    const {imageLink, title, country} = bookCard
    
    return (
        <div className='book-card'>
            <img src={imageLink} alt={title+'.jpg'} />
            <h3>{title}</h3>
            <h3>{country}</h3>
        </div>
    )
}