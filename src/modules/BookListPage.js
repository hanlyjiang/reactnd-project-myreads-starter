import React from 'react'
import PageTitle from './widget/PageTitle'
import OpenSearch from './widget/OpenSearch'
import BookShelf from './widget/BookShelf'
import * as BooksAPI from '../BooksAPI'

export default class BookListPage extends React.Component {

    state = {
        allBooks: [],
        screen: 'list'// search,list
    }

    /**
     *
     */
    componentDidMount() {
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
                                   bookList={this.state.allBooks.filter((book) => book.shelf === 'currentlyReading')}/>
                        <BookShelf shelfName='Want to Read'
                                   bookList={this.state.allBooks.filter((book) => book.shelf === 'wantToRead')}/>
                        <BookShelf shelfName='Read'
                                   bookList={this.state.allBooks.filter((book) => book.shelf === 'read')}/>
                    </div>
                </div>
                <OpenSearch onClick={this.props.onSearchClick}/>
            </div>
        )
    }
}