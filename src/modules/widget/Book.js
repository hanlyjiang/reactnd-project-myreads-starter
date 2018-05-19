import React from 'react'
import BookShelfChanger from "./BookShelfChanger";

export default class Book extends React.Component {

    render(){
        const {bookInfo} = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${bookInfo.imageLinks['smallThumbnail']})`
                    }}></div>
                    <BookShelfChanger shelfState={bookInfo.shelf}/>
                </div>
                <div className="book-title">{bookInfo.title}1776</div>
                <div className="book-authors">{bookInfo.authors}David McCullough</div>
            </div>
        )
    }
}