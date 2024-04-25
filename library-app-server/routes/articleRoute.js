const express = require('express')
const router = express.Router();

const { getAllArticles, addArticle, updateArticle, deleteArticle } = require('../controllers/articleController');

router.get('/', getAllArticles)
router.post('/add', addArticle)
router.put('/update/:id', updateArticle)
router.delete('/delete/:id', deleteArticle)

module.exports = router;