import React from 'react'
import PageTitle from './widget/PageTitle'
import OpenSearch from './widget/OpenSearch'
import BookShelf from './widget/BookShelf'
import * as BooksAPI from '../BooksAPI'
import {update} from "../BooksAPI";

export default class BookListPage extends React.Component {

    state = {
        allBooks: [],
    }

    onShelfChange = (book, toShelf) => {
        console.log("toShelf:" + toShelf + '; book.title:' + book.title)
        BooksAPI.update(book, toShelf)
            .then((res) => {
                // console.log("changeShelf Response:" + JSON.stringify(res))
                this.updateAllData()
            })
    }

    /**
     *
     */
    componentDidMount() {
        this.updateAllData();
    }

    updateAllData() {
        BooksAPI.getAll().then((books) => {
            this.setState({allBooks: books})
        })
    }

    render() {
        return (
            <div className="list-books">
                <PageTitle text='MyReads'/>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelfName='My Current Reading'
                                   bookList={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')}
                                   onShelfChange={this.onShelfChange}/>
                        <BookShelf shelfName='Want to Read'
                                   bookList={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')}
                                   onShelfChange={this.onShelfChange}/>
                        <BookShelf shelfName='Read'
                                   bookList={this.state.allBooks.filter((book) => book.shelf === 'read')}
                                   onShelfChange={this.onShelfChange}/>
                    </div>
                </div>
                <OpenSearch/>
            </div>
        )
    }
}