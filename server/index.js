var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cors = require('cors');


var app = express();
const port=4200;

const route=require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist',
{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',function(err){
    if(err)
        console.log('Unable to Connect : '+ err);
    else
        console.log('Connected to MongoDB');
});

app.get('/',(req,res) => res.send('Hi'))

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.listen(port,function(){
    console.log('Port-'+ port +' : Online');
});