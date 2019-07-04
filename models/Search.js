module.exports = (Schema, model) => {
  const Search = new Schema({
    title: {
      type: String
    },
    authors: {
      type: [String]
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    link: {
      type: String
    }
  })

  return model('Search', Search)
}