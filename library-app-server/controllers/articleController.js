const catalogue = require('../data/catalogue')

module.exports.getAllArticles = (req, res) => {
    res.status(200)
    res.json(catalogue.articles)
}

module.exports.addArticle = (req, res) => {
    try {
        const newArticle = {
          id: catalogue.articles[catalogue.articles.length - 1].id + 1,
          title: req.body.title,
          description: req.body.description
        }

        catalogue.articles.push(newArticle)

        res.status(200)
        res.send({
            status: 'Added New Article',
            new_article: newArticle
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports.updateArticle = (req, res) => {
    try{
        const id = req.params.id
        const index = catalogue.articles.findIndex((article) => article.id == id)

        const updatedArticle = {
          id: id, 
          title: req.body.title,
          description: req.body.description,
        }

        catalogue.articles[index] = updatedArticle;

        res.status(200)
        res.json({
            status: `updated article ${updatedArticle.title}`,
            new_article: updatedArticle
        })
    } catch(err){
        console.log(err)
    }
}

module.exports.deleteArticle = (req, res) => {
    try{
        const id = req.params.id
        const index = catalogue.articles.findIndex((article) => article.id == id)

        if (index < 0){
            res.status(400)
            res.json({ status : 'no article found' })
            return
        }
        catalogue.articles.splice(index, 1)
        res.status(200)
        res.json({ status: `deleted article` })
    } catch(err) {
        console.log(err)
    }
}