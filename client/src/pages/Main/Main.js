import React, { useContext} from 'react';
import SearchContext from '../../utils/SearchContext'
import Search from '../../Components/Search'
import Results from '../../Components/Result'


const Main = () => {

  const {books} = useContext(SearchContext)

  return (
    <>
    <Search/>
    {
      books.length >0 ?
      <Results/> : null

    }
    </>
  );
}

export default Main