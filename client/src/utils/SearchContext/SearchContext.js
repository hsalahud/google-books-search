import { createContext } from 'react'

const SearchContext = createContext({
  title: '',
  book: {},
  books: [],
  favBooks: [],
  handleInputChange: _ => {},
  searchBook: _ => {},
  favBook: _ => {},
  deleteFav: _ => {}
})

export default SearchContext