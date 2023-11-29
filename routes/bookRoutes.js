const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.post('/postbooks', bookController.postBook);
router.get('/getbooks', bookController.getBooks);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
