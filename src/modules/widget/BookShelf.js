import React from 'react'
import Book from "./Book";


export default class BookShelf extends React.Component {


    render() {
        const {shelfName: bookShelfName, bookList: books} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map((book) => (
                                <li key={book.id}>
                                    <Book
                                        bookInfo={book}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}