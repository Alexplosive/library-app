const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
});

// book routes

const bookRoute = require('./routes/bookRoute')
app.use('/books', bookRoute)

//article routes


//papers routes


module.exports = app