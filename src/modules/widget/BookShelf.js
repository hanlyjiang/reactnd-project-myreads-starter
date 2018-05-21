import React from 'react'

import BookGrid from './BookGrid'
import PropTypes from "prop-types";


export default function BookShelf(props) {

    const {shelf, books, onShelfChange} = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <BookGrid books={books} onShelfChange={onShelfChange}/>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}