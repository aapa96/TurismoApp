'use strict'

var express = require('express');
var UserController = require('./controlador');
var md_auth = require('./middlewares');
var api = express.Router();

api.get('/ControladorU',UserController.pruebas);
api.post('/createUser',UserController.createUser);
api.post('/loginUser',UserController.loginUser);
api.get('/findUser/:id',md_auth.ensureAuth,UserController.findUser);
api.put('/updateUser/:id',md_auth.ensureAuth,UserController.updateUser);

module.exports=api;