import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './modules/SearchPage'
import BookListPage from './modules/BookListPage'
import {Route} from 'react-router-dom'


class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
                <Route exact path='/' component={BookListPage}/>
                <Route path='/search' component={SearchPage}/>
            </div>
        )
    }
}

export default BooksApp
