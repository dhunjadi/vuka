import React from 'react'

export default function TaskCard({taskCard}) {
    const { title, text, subject } = taskCard

return (
    <div className='task-card'>
        <h1 className='task-card-title'>{title}</h1>
        <p className='task-card-text'>{text}</p>
        <span>{subject}</span>
    </div>
    )
}
