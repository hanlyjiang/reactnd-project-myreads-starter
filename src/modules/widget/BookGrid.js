import React from 'react'
import Book from "./Book";
import PropTypes from "prop-types";

export default class BookGrid extends React.Component {

    static propTypes = {
        bookList: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        const {bookList: books, onShelfChange} = this.props
        return (
            books instanceof Array &&
            <ol className="books-grid">
                {
                    books.map((book) => (
                        <li key={book.id}>
                            <Book
                                bookInfo={book}
                                onShelfChange={onShelfChange}
                            />
                        </li>
                    ))
                }
            </ol>
        )
    }
}