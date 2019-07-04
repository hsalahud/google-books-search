import React, { useContext} from 'react';
import SearchContext from '../../utils/SearchContext'
import Search from '../../Components/Search'
import Favorites from '../../Components/Favorites'


const Favoritespage = () => {

  const {favBooks} = useContext(SearchContext)

  return (
    <>
    <Search/>
    <h1>My Favorites:</h1>
    {
      favBooks.length >0 ?
      <Favorites/> : null

    }
    </>
  );
}

export default Favoritespage