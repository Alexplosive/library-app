const express = require('express')
const router = express.Router();

const { getAllBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');

router.get('/', getAllBooks)
router.post('/add', addBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)

module.exports = router;