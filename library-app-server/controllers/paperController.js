const { catalogue } = require('../data/catalogue')

module.exports.getAllPapers = (req, res) => {
    res.status(200)
    res.json(catalogue.papers)
}

module.exports.addPapers = (req, res) => {
    try { 
        const newPaper = {
            id: catalogue.papers[catalogue.papers.length - 1].id + 1,
            title: req.body.title,
            research_topic: req.body.research_topic,
            description: req.body.description
        }

        catalogue.papers.push(newPaper)

        res.status(200)
        res.send({
            status: 'Added New Paper',
            new_paper: newPaper
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports.updatePaper = (req, res) => {
    try{
        const id = req.params.id

        const index = catalogue.papers.findIndex((paper) => paper.id == id)

        const updatedPaper = {
            id: id,
            title: req.body.title,
            research_topic: req.body.research_topic,
            description: req.body.description
        }

        catalogue.papers[index] = updatedPaper;

        res.status(200)
        res.json({
            status: `updated paper ${updatedPaper.title}`,
            new_paper: updatedPaper
        })
    } catch(err){
        console.log(err)
    }
}

module.exports.deletePaper = (req, res) => {
    try{
        const id = req.params.id
        const index = catalogue.papers.findIndex((paper) => paper.id == id)

        if (index < 0){
            res.status(400)
            res.json({ status : 'no paper found' })
            return
        }

        catalogue.papers.splice(index, 1)

        res.status(200)
        res.json({ status: `deleted paper` })
    } catch(err) {
        console.log(err)
    }
}