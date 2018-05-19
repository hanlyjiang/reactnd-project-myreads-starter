import React from 'react'

export default function OpenSearch(props) {
    return (
        <div className="open-search">
            <a onClick={props.onClick}>Add a book</a>
        </div>
    )
}