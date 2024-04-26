const express = require('express')
const router = express.Router();

const { getAllBooks, addBook, updateBook, deleteBook, reserveBook, searchBook } = require('../controllers/bookController');

router.get('/', getAllBooks)
router.post('/add', addBook)
router.put('/update/:id', updateBook)
router.delete('/delete/:id', deleteBook)
router.post('/reserve/:id', reserveBook)
router.get('/search/:search', searchBook)

module.exports = router;