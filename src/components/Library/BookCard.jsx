import React from 'react'
import { Link } from 'react-router-dom'

export default function BookCard({bookCard}) {
    const {imageLink, title, author, id} = bookCard
    
    return (
        <div className='book-card'>
            <Link to ={`/library/book/${id}`}>
            <img src={imageLink} alt={title+'.jpg'} />
            <h3>{title}</h3>
            <h3>{author}</h3>
            </Link>
        </div>
    )
}