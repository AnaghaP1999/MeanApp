const express = require('express'); // requiring express to create a server
const app = new express();  // instance of express
const logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken');
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

function verifytoken(req, res, next) {
    try {
        if (!req.headers.authorization) throw 'Unauthorized';
        let token = req.headers.authorization.split(' ')[1];
        if(!token) throw 'Unauthorized';
        let payload = jwt.verify(token, 'secretKey');
        if(!payload) throw 'Unauthorized';
        res.status(200),send(payload);
        next()
    } catch (error) {
        res.status(401).send('Error');
    }
}
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log('Connected to my local db');
})
.catch(()=>{
    console.log('Error !!! Connection not');
})

const employeeSchema = new mongoose.Schema({  
    name: String,
    designation: String,
    location: String,
    salary: Number
  });
  const Employee = mongoose.model('employee', employeeSchema, 'employees');

app.post('/login', async(req,res)=>{
    try {
        console.log(req.body);
        var email = req.body.email;
        var password = req.body.password;
        if(email == 'admin@gmail.com' && password == '123') {
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


app.get('/employeelist', (req, res) => {
    Employee.find()
      .then((employees) => {
        res.json(employees);
      })
      .catch((error) => {
        console.error('Error retrieving employees:', error);
        res.status(500).send('Error retrieving employees');
      });
  });

app.post('/addEmployee', (req, res) => {
    const { name, location, designation, salary } = req.body;
  
    const employee = new Employee({
      name,
      location,
      designation,
      salary
    });

    employee.save()
      .then((savedEmployee) => {
        res.json(savedEmployee);
      })
      .catch((error) => {
        console.error('Error saving employee:', error);
        res.status(500).send('Error saving employee');
      });
  });



const PORT = 3000; // port number
app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    
    });   // this is where server starts listening



