'use strict'
var bcrypt = require('bcrypt-nodejs');
var jwt = require('./jwt');
var User = require('./modelo');

function pruebas(req,res){
	res.status(200).send({
		message:"Controlador de usuario listo"
	});
}

function createUser(req,res){
	var user = User();
	var params = req.body;
	console.log(params);

	user.name = params.name;
	user.surname = params.surname;
	user.email = params.email;
	user.password = params.password,
	user.role = 'ROLE_USER';
	user.create = Date.now();

	
	if(params.name != null && params.surname != null && params.email != null && params.password != null){
		User.findOne({email:params.email.toLowerCase()},(err,userFind)=>{
			if(userFind){
				res.status(400).send({message:"Usuario ya registrado"});
			}else{
				bcrypt.hash(params.password,null,null,function(err,hash){
					user.password = hash;
					user.save((err,userStored)=>{
						if(err){
							res.status(500).send({message:"Error al crear usuario"})
						}else{
							if (!userStored) {
								res.status(404).send({message:"No se pudo registrar el usuario"});
							} else {
								res.status(200).send({message:"Se registro correctamente",user: userStored});
							}
						}
					})
				})				
			}
		})
	}else{
		res.status(400).send({message:"Ingrese todos los datos."});
	}
}

function loginUser(req,res){
	var params = req.body;
	var email = params.email;
	var password = params.password;
	console.log(params);
	if(email != null && password != null){
		User.findOne({email:email.toLowerCase()},(err,user) =>{
			if (err) {	
				res.status(500).send({message:"Error en la peticion"});
			} else {
				if (!user) {
					res.status(404).send({message:"Email o password incorrecto."});
				} else {
					bcrypt.compare(password,user.password,function(err,check){
						console.log(check);
						if(check){
							res.status(200).send({token:jwt.createToken(user),_id:user._id});
						}else{
							res.status(404).send({message:"Usuario no ha podido iniciar sesion"});
						}
					});
				}
			}
		});
	}else{
		res.status(404).send({message:"Ingrese todos los datos."})
	}
	
}
function findUser(req,res){
	var userId = req.params.id;
	var update = req.body;
	console.log(userId,update);
	User.findOne({_id:userId.toLowerCase()},(err,user) =>{
		res.status(200).send({user:user});
	});
}
function updateUser(req,res){
	var userId = req.params.id;
	var update = req.body;
	
	User.findByIdAndUpdate(userId,update,(err,userUpdated) =>{
		if (err) {
			res.status(500).send({message:"Error al actualizar usuario"});
		} else { 
			if (!userUpdated) {
				res.status(404).send({message:"No se ha podido actualizar el usuario"});
			} else {
				res.status(200).send({user:userUpdated});
			}
		}
	});
}


module.exports = {

	pruebas,
	createUser,
	loginUser,
	findUser,
	updateUser

};