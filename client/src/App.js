import React, { useState, useEffect } from 'react';
import Books from './utils/Books.js'
import SearchContext from './utils/SearchContext'
import Main from './pages/Main'
import Favoritespage from './pages/Favoritespage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = _ => {
  const [bookState, setBookState] = useState({
    title: '',
    book: {},
    books: [],
    favBooks: []
  })

//Function to handle input change
  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.id]: event.target.value })
  }

  //When we search a book, the google books api results are stored the db and then we retrieve the data from there and push it to the books array for it to be displayed on the page
  bookState.searchBook = event => {
    event.preventDefault()
    Books.search(bookState.title)
      .then(_ => {
        Books.getSearch()
          .then(({ data }) => {
            setBookState({ ...bookState, books: data })
          }).catch(e => console.log(e))
      })
  }

  //This is to delete a book from the favorites page
  bookState.deleteFav = event => {
    const id = event.currentTarget.id
    let favBooks = JSON.parse(JSON.stringify(bookState.favBooks))
    Books.deleteFav(id)
      .then(_ => {
        const nonDeleted = favBooks.filter(book => !(book['_id']===id))
        setBookState({ ...bookState, favBooks: nonDeleted })
      })
  }

  //Add a book to the favorites page
  bookState.favBook = event => {
    //Use current target to go to the parent of the element with the event listener
    let books = JSON.parse(JSON.stringify(bookState.books))
    let favBooks = JSON.parse(JSON.stringify(bookState.favBooks))
    const favBook = books.filter(book => book['_id'] === event.currentTarget.id)[0]

    Books.postFav(favBook)
      .then(_ => {
        favBooks.push(favBook)
        setBookState({ ...bookState, favBooks })
      }).catch(e => console.log(e))

  }

  //If we have preexisting saved books we set our state to include them
  useEffect(_ => {
    Books.getFavs()
      .then(({ data }) => {
        setBookState({ ...bookState, favBooks: data })
      }).catch(e => console.log(e))
  }, [])

  return (
    <>
      <Router>
        <SearchContext.Provider value={bookState}>
          <Route exact path='/' render={_ =>

            <Main />
          } />

          <Route exact path='/favorites' render={_ =>

            <Favoritespage/>
          } />
        </SearchContext.Provider>
      </Router>
    </>
  );
}

export default App;
