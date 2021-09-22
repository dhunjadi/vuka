import React from 'react'

export default function BookCard({bookCard}) {
    return (
        <div className='book-card'>
            <img src={bookCard.volumeInfo.imageLinks.thumbnail} alt={bookCard.volumeInfo.title} />
            <h3>{bookCard.volumeInfo.title}</h3>
            <p>{bookCard.volumeInfo.description}</p>
        </div>
    )
}