const express = require('express');
const router = express.Router();
const booksController = require('../../controllers/api/books');

// These routes are "prefixed" with /api/books
router.get('/', booksController.index);
router.post('/new', booksController.create);
router.delete('/', booksController.delete);

module.exports = router;