const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: "https://placehold.co/80x100"
  },
  comment: {
    type: String,
  }
})




module.exports = mongoose.model('Book', bookSchema)