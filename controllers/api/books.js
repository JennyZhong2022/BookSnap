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
    const user = await User.findById(req.user._id)
    user.mybooks.push(mybook._id)
    user.save()
  } catch(err) {
    res.status(400).json(err);
}
};

const deleteBook = async (req, res) => {
  try{
    await Book.findByIdAndDelete(req.params.id)

  } catch(err) {
    res.status(400).json(err)
  }

}


module.exports = {
  index,
  create,
  delete: deleteBook,
}