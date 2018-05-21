import React from 'react'
import PageTitle from './widget/PageTitle'
import OpenSearch from './widget/OpenSearch'
import BookShelf from './widget/BookShelf'
import * as BooksAPI from '../BooksAPI'

export default class BookListPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allBooks: [],
        }
    }


    onShelfChange = (book, toShelf) => {
        // console.log("toShelf:" + toShelf + '; book.title:' + book.title)
        BooksAPI.update(book, toShelf)
            .then((res) => {
                // console.log("changeShelf Response:" + JSON.stringify(res))
                this.updateAllData()
            })
    }


    componentDidMount() {
        this.updateAllData();
    }

    updateAllData() {
        BooksAPI.getAll().then((books) => {
            if (Array.isArray(books)) {
                this.setState({allBooks: books})
            } else {
                this.setState({allBooks: []})
            }
        })
    }

    render() {
        return (
            <div className="list-books">
                <PageTitle text='MyReads'/>
                <div className="list-books-content">
                    <div>
                        <BookShelf shelf='My Current Reading'
                                   books={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')}
                                   onShelfChange={this.onShelfChange}/>
                        <BookShelf shelf='Want to Read'
                                   books={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')}
                                   onShelfChange={this.onShelfChange}/>
                        <BookShelf shelf='Read'
                                   books={this.state.allBooks.filter((book) => book.shelf === 'read')}
                                   onShelfChange={this.onShelfChange}/>
                    </div>
                </div>
                <OpenSearch/>
            </div>
        )
    }
}