const express = require('express');
//const stri= require('json-stringify-safe');
const axios = require('axios');
const hbs =require('hbs');
hbs.registerPartials(--__dirname+'views/partials') ; // location for layouts
var app = express(); // express app
app.use('/static',express.static('views'));
app.set('view engine','hbs'); // settingup hbs viewing engine
app.get('/home',(req,res)=>{  // route /home with req (GET) and res (POST) callback

    res.render('home.hbs',{
        title : "About",
        year : new Date().getFullYear()
    });
});
app.route('/exchange/:target')
.post((req,res,next)=>{
    var data= req.params.target;
    axios.get(`http://data.fixer.io/api/latest?access_key=444d148a4a0295a7d982ee9edd55933a&base=EUR&symbols=${data}`)
    .then((response)=>{
        res.send(JSON.stringify(response.data,undefined,2));
    },(err)=>{
        res.send({success: false});
    }).catch((err)=>{console.log("API REQUEST UNSUCCESSFULL ...")})
})
.get((req,res,next)=>{
    res.send("<h1> METHOD NOT ALLOWED </h1>");
})


const PORT =process.env.PORT || 3000;
app.listen(3000,()=>{ console.log(`Running on Port ${PORT}...`)});