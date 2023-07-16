const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Anagahp:Anagha001@cluster0.q3mgyhu.mongodb.net/Database1')
.then(()=>{
    console.log('Connected to my local db');
})
.catch(()=>{
    console.log('Error !!! Connection not');
})