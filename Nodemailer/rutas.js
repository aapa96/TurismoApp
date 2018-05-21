'use strict'

var express = require('express');
var NodemailerController = require('./controlador');
var md_auth = require('../Usuario/middlewares');
var api = express.Router();

api.get('/ControladorN',NodemailerController.pruebas);
api.post('/registrarseEmail',NodemailerController.registrarse);
api.post('/Contacto',NodemailerController.Contacto);

api.post('/JavaNationContact',NodemailerController.ContactJavaNation);


module.exports=api;