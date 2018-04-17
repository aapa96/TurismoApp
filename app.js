'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
var path = require('path');


var app = express();



app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

  //configurar cabeceras http
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT , DELETE');
	res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
	next();
});


// //rutas
var usuario_routes = require('./Usuario/rutas');
var categoria_routes = require('./Categoria/rutas');
var nodemailer_routes = require('./Nodemailer/rutas');

// //rutas base 

app.use('/api',usuario_routes);
app.use('/api',categoria_routes);
app.use('/api',nodemailer_routes);



module.exports=app;


// apidoc -e "(node_modules|public)" -o public/apidoc