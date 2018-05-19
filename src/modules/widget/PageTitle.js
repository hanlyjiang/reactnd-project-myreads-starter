import React from 'react'

export default function PageTitle(props) {
    return (
        <div className="list-books-title">
            <h1>{props.text}</h1>
        </div>
    )
}