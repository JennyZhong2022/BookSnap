require('dotenv').config();
require('./config/database');

const Book = require('./models/book');
const User = require('./models/user');

const data = require('./seedData');

const seedDB = async () => {
  await Book.deleteMany({});
  // for (let i = 0; i < data.length; i++) {
  //   const book = new Book({
  //     title: data[i].volumeInfo.title,
  //     authors: data[i].volumeInfo.authors,
  //     image: data[i].volumeInfo.imageLinks.thumbnail,
  //     publishedDate: data[i].volumeInfo.publishedDate,
  //     selfLink: data[i].selfLink,
  //   });
  //   await book.save();
  // }
};

const addToMyBooks = async () => {
  const book = await Book.findOne({ title: 'Animal Farm' });
  await User.findOneAndUpdate({email: 'yong@email.com'}, {mybooks: book._id})
};

const populateBooks = async () => {
  const result = await User.findOne({email: 'yong@email.com'}).populate('mybooks').exec()
  console.log(result)
}
// addToMyBooks()
seedDB();
// populateBooks()
