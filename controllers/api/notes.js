// const User = require('../../models/user')
const Book = require('../../models/book')


// const index = async (req, res) => {
//   try {

//   } catch(err) {
//     res.status(400).json(err)
//   }
// }


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
    res.json(note)
  } catch(err) {
    res.status(400).json(err)
  }
}

const deleteNote = async (req, res) => {
  try {
    const note = await Book.findByIdAndUpdate(req.params.id, {note: ''})
    res.json(note)
  } catch(err) {
    res.status(400).json(err)
  }
}


module.exports = {
  create,
  edit: editNote,
  delete: deleteNote
}