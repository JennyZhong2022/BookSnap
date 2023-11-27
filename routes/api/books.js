const express = require('express');
const router = express.Router();

const bookController = require('../../controllers/api/books')

// These routes are "prefixed" with /api/books
router.get('/', bookController.index)
router.post('/new', bookController.create)
router.delete('/', bookController.delete)

module.exports = router;