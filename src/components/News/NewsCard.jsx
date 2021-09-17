import React from 'react'

export default function NewsCard({newsCard}) {
    const { title, text } = newsCard
    return (
        <div className='news-card'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}
