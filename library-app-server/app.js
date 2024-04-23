const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/v1', (req, res) => {
    res.send('hello');
});

// book routes

const bookRoute = require('./routes/bookRoute')
app.use('/api/v1/books', bookRoute)

//article routes


//papers routes


module.exports = app