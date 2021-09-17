import React from 'react'

export default function NewsCard({newsCard}) {
    const { title, text } = newsCard
    return (
        <div className='news-card'>
            <h1 className='news-card-title'>{title}</h1>
            <p className='news-card-text'>{text}</p>
        </div>
    )
}
