const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const bookSchema = new Schema({
  title: {
    type: String,
  },
  authors: [{
    type: String,
    default: ''
  }],
  image: {
    type: String,
    default: "https://placehold.co/80x100"
  },
  publishedDate: {
    type: String,
  },
  description: {
    type: String,
  },
  bookId: {
    type: String,
  },
  note: {
    type: String,
  },
}, {timestamps: true})




module.exports = mongoose.model('Book', bookSchema)