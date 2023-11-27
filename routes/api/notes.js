const express = require('express');
const router = express.Router();
const noteController = require('../../controllers/api/notes')

// These routes are "prefixed" with /api/books
router.put('/:id/edit', noteController.edit)
router.post('/new', noteController.create)
router.put('/:id', noteController.delete)

module.exports = router;