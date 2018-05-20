import React from 'react'
import Book from "./Book";

export default class BookGrid extends React.Component {

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