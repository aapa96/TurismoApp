'use strict'

var express = require('express');
var CategoriaController = require('./controlador');
var md_auth = require('../Usuario/middlewares');
var api = express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'../Uploads/Categorias'});
api.get('/ControladorC',CategoriaController.pruebas);
api.get('/getCategorias/:page?',CategoriaController.getCategorias);
api.post('/addCategoria',CategoriaController.addCategoria);
api.post('/uploadImageCategoria/:id',md_upload,CategoriaController.uploadImage);
api.post('/getImage/:imageFile',CategoriaController.getImage);

module.exports=api;