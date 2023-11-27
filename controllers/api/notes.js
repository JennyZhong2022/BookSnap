// const User = require('../../models/user')
const Book = require('../../models/book')

const create = async (req, res) => {
  try {
    const note = await Book.findByIdAndUpdate(req.body._id, {note: req.body.note})
    res.json(note)
  } catch(err) {
    res.status(400).json(err)
  }
}

const editNote = async (req, res) => {
  try {
    const note = await Book.findByIdAndUpdate(req.body._id, {note: req.body.note})
    console.log(note)

  } catch(err) {
    res.status()
  }
}


module.exports = {
  create,
  editNote
}