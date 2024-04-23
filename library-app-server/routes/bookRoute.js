const express = require('express')
const router = express.Router();

const { getAllBooks, addBook, updateBook, deleteBook } = require('../controllers/bookController');

router.get('/', getAllBooks)
router.post('/add', addBook)
router.put('/update/:name', updateBook)
router.delete('/delete/:name', deleteBook)

module.exports = router;