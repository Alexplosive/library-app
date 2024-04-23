const catalogue = require('../data/catalogue')

module.exports.getAllBooks = (req, res) => {
    res.status(200)
    res.json(catalogue.books)
}

module.exports.addBook = (req, res) => {
    try {
        const newBook = {
            author: req.body.author,
            country: req.body.country,
            language: req.body.language,
            link: req.body.link,
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
        const name = req.params.name

        const index = catalogue.books.findIndex((book) => book.title === name)

        const updateBook = {
            author: req.body.author,
            country: req.body.country,
            language: req.body.language,
            link: req.body.link,
            pages: req.body.pages,
            title: req.body.title,
            year: req.body.year
        }

        catalogue.books[index] = updateBook;

        res.status(200)
        res.json({
            status: `updated book ${name}`,
            new_book: updateBook
        })
    } catch(err){
        console.log(err)
    }
}

module.exports.deleteBook = (req, res) => {
    try{
        const name = req.params.name
        const index = catalogue.books.findIndex((book) => book.title === name)
        if (index > -1){
            catalogue.books.splice(index, 1)
        }
        res.status(200)
        res.json({ status: `deleted book ${name}` })
    } catch(err) {
        console.log(err)
    }
}