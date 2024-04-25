const catalogue = require('../data/catalogue')

module.exports.getAllBooks = (req, res) => {
    res.status(200)
    res.json(catalogue.books)
}

module.exports.addBook = (req, res) => {
    try { 
        const newBook = {
            id: catalogue.books[catalogue.books.length - 1].id + 1,
            author: req.body.author,
            country: req.body.country,
            language: req.body.language,
            pages: req.body.pages,
            title: req.body.title,
            year: req.body.year
        }

        catalogue.books.push(newBook)

        res.status(200)
        res.send({
            status: 'Added New Book',
            new_book: newBook
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports.updateBook = (req, res) => {
    try{
        const id = req.params.id

        const index = catalogue.books.findIndex((book) => book.id == id)

        const updatedBook = {
            id: id,
            author: req.body.author,
            country: req.body.country,
            language: req.body.language,
            pages: req.body.pages,
            title: req.body.title,
            year: req.body.year
        }

        catalogue.books[index] = updatedBook;

        res.status(200)
        res.json({
            status: `updated book ${updatedBook.title}`,
            new_book: updatedBook
        })
    } catch(err){
        console.log(err)
    }
}

module.exports.deleteBook = (req, res) => {
    try{
        const id = req.params.id
        const index = catalogue.books.findIndex((book) => book.id == id)

        if (index < 0){
            res.status(400)
            res.json({ status : 'no book found' })
            return
        }

        catalogue.books.splice(index, 1)

        res.status(200)
        res.json({ status: `deleted book` })
    } catch(err) {
        console.log(err)
    }
}