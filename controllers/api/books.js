const User = require('../../models/user')
const Book = require('../../models/book')



const index = async (req, res) => {
  try{
    const user = await User.findById(req.user._id).populate('mybooks').exec();
    res.json(user.mybooks)
  } catch(err) {
    res.status(400).json(err)
  }
}

const create = async (req, res) => {
  try{
    const mybook = await Book.create(req.body)
    await User.findByIdAndUpdate(req.user._id, {mybooks: mybook._id})
  } catch(err) {
    res.status(400).json(err);
}
};

const deleteBook = async (req, res) => {
  try{
    await Book.findByIdAndDelete(req.body._id)

  } catch(err) {
    res.status(400).json(err)
  }

}


module.exports = {
  index,
  create,
  delete: deleteBook,
}