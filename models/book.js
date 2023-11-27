const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: [{
    type: String,
    required: true
  }],
  image: {
    type: String,
    default: "https://placehold.co/80x100"
  },
  publishedDate: {
    type: String,
  },
  selfLink: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  }
})




module.exports = mongoose.model('Book', bookSchema)