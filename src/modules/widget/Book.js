import React from 'react'
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types';

export default class Book extends React.Component {

    propTypes = {
        bookInfo: PropTypes.object.isRequired,
        onShelfChange: PropTypes.func.isRequired
    }

    render() {
        const {bookInfo, onShelfChange} = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${bookInfo.imageLinks.smallThumbnail})`
                    }}/>
                    <BookShelfChanger shelfState={bookInfo.shelf} book={bookInfo} onShelfChange={onShelfChange}/>
                </div>
                <div className="book-title">{bookInfo.title}1776</div>
                <div className="book-authors">{bookInfo.authors}David McCullough</div>
            </div>
        )
    }
}