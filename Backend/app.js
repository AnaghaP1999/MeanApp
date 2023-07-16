const express = require('express'); // requiring express to create a server
const app = new express();  // instance of express
const logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// require('./db/index')
app.post('/login', async(req,res)=>{
    try {
        console.log(req.body);
        var email = req.body.email;
        var password = req.body.password;
        if(email == 'anaghatcr1999@gmail.com' && password == '123') {
            let payload = {email:email, password:password};
            let token = jwt.sign(payload, 'secretkey');
            res.status(200).send({message:'Success', token:token});
        } else {
            res.status(400).send({message:'Unauthorized'});
        }
    } catch (error) {
        res.status(404).send({message:'Not found'});
    }
});
// const keralaRouter = require('./routes/kerala')
// app.use('/kerala', keralaRouter);

// const studentRouter = require('./routes/student');
// app.use('/stuent', studentRouter);

const PORT = 3000; // port number
app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    
    });   // this is where server starts listening



