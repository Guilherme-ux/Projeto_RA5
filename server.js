const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/Projeto_RA5',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    UsefindAndModify:false
},function(err){
   if(err){
        console.log(err)
   }else{
        console.log('MongoDB Conectado com sucesso!')     
   } 
});

const app = express ();
app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.get('/',function(req,res){
    res.json({message:'Hello World'});
});

app.listen(port,function(){
    console.log('Server runing on port ${port}')
})