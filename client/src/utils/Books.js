import axios from 'axios'

const Books = {
  search: (bookTitle) => axios.post(`/search/${bookTitle}`),
  getSearch: _ => axios.get('/search'),
  getFavs: _ => axios.get('savedBooks'),
  postFav: (book) => axios.post('savedBooks', book),
  deleteFav: (id) => axios.delete(`savedBooks/${id}`)
  // getStacks: _ => axios.get('/stacks'),
  // getFavorites: _ => axios.get('/favorites'),
  // addFavorite: id => axios.put(`/stacks/${id}`),
  // deleteStack: id => axios.delete(`/stacks/${id}`)
}

export default Books