import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookGrid from "./widget/BookGrid";


export default class SearchPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            query: '',
            queryResults: []
        }
    }

    onQueryChange = (query) => {
        query.trim() === '' || BooksAPI.search(query)
            .then((books) => {
                if (Array.isArray(books)) {
                    this.setState({
                        query: query,
                        queryResults: books
                    })
                } else {
                    this.setState({
                        query: query,
                        queryResults: []
                    })
                }
            })
    }

    onShelfChange = (book, toShelf) => {
        console.log("onShelfChange : Current page is SearchPage, will do nothing")
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event) => {
                                   this.onQueryChange(event.target.value)
                               }}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid books={this.state.queryResults} onShelfChange={this.onShelfChange}/>
                </div>
            </div>
        )
    }
}