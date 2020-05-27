const express = require('express');
const mongoose = require('mongoose');
// express
const app = express();
const port = 5000;

const bodyParser = require('body-parser');

const { User } = require('./models/User');
const config = require('./config/key');

// application/x-www-form-urlencoded 정보를 가져옴
app.use(bodyParser.urlencoded({extended : true}));

// application/json 으로 된 정보를 가져옴

app.use(bodyParser.json());



mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.get('/', (req, res) => res.send('hello world'));

app.post('/register', (req,res) => {
    //회원가입 할때 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣는다.
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({success : false, err})
        return res.status(200).json({
            success : true,
        });
    }); // save는 mogodb 모듈임
});




app.listen(port, console.log(`Example app listening on port ${port}`));

