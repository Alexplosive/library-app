const express = require('express')
const router = express.Router();

const { getAllPapers, addPapers, updatePaper, deletePaper } = require('../controllers/paperController');

router.get('/', getAllPapers)
router.post('/add', addPapers)
router.put('/update/:id', updatePaper)
router.delete('/delete/:id', deletePaper)

module.exports = router;