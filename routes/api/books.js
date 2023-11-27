const express = require('express');
const router = express.Router();
const booksController = require('../../controllers/api/books');

const bookController = require('../../controllers/api/books')

// These routes are "prefixed" with /api/books
router.get('/', bookController.index)
router.post('/new', bookController.create)
router.delete('/:id', bookController.delete)

module.exports = router;