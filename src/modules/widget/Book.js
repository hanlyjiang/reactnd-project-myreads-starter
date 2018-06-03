import React from 'react'
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';

export default function Book(props) {

    const {book, onShelfChange} = props

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: book.hasOwnProperty('imageLinks') ? `url(${book.imageLinks.smallThumbnail}):` : ''
                }}/>
                <BookShelfChanger shelf={book.shelf ? book.shelf : 'none'} book={book} onShelfChange={onShelfChange}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}David McCullough</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

Book.componentDidCatch = (error, info) => {
    // You can also log the error to an error reporting service
    console.log(info)
}
