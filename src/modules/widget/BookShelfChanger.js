import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import PropTypes from "prop-types";


export default function BookShelfChanger(props) {

    var changeBookShelf = (book, toShelf) => {
        BooksAPI.update(book, toShelf)
            .then((res) => {
                props.onShelfChange(book, toShelf)
            })
    }

    const {shelf, book} = props;
    return (
        <div className="book-shelf-changer">
            <select defaultValue={shelf ? shelf : "none"}
                    onChange={(event) => {
                        console.log(event.target.value)
                        changeBookShelf(book, event.target.value)
                    }}>
                <option value="default" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>

    )

}

BookShelfChanger.propTypes = {
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired
}