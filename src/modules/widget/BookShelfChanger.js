import React from 'react'
import * as BooksAPI from '../../BooksAPI'


export default class BookShelfChanger extends React.Component {

    changeBookShelf = (book, toShelf) => {
        BooksAPI.update(book, toShelf)
            .then((res) => {
                this.props.onShelfChange(book, toShelf)
            })
    }

    render() {
        const {shelfState: shelf, book: book} = this.props;
        return (
            <div className="book-shelf-changer">
                <select defaultValue={shelf ? shelf : "none"}
                        onChange={(event) => {
                            console.log(event.target.value)
                            this.changeBookShelf(book, event.target.value)
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

}