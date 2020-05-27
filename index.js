const express = require('express');
const mongoose = require('mongoose');
// express
const app = express()
const port = 5000;
// mongoose


mongoose.connect('mongodb+srv://wooong:wodnd123@cluster0-y0azl.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.get('/', (req, res) => res.send('hello world'));

app.listen(port, console.log(`Example app listening on port ${port}`));

