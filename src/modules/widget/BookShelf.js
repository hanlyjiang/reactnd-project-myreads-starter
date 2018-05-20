import React from 'react'

import BookGrid from './BookGrid'
import PropTypes from "prop-types";


export default class BookShelf extends React.Component {

    static propTypes = {
        shelfName: PropTypes.string.isRequired,
        bookList: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        const {shelfName: bookShelfName, bookList: books, onShelfChange} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelfName}</h2>
                <div className="bookshelf-books">
                    <BookGrid bookList={books} onShelfChange={onShelfChange}/>
                </div>
            </div>
        )
    }
}