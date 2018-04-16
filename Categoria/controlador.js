'use strict'
var bcrypt = require('bcrypt-nodejs');
var multipart = require('connect-multiparty');
var mongoosepagination = require('mongoose-pagination');
var fs = require('fs');
var path = require('path');
var Categoria = require('./modelo');

function pruebas(req,res){
	res.status(200).send({
		message:"Controlador de categoria listo"
	});
}
function getCategorias(req,res){
    if(req.params.page){
        var page = req.params.page;
    }else{
        var page = 1;
    }
    var itemsPage = 15
    Categoria.find().sort('name').paginate(page,itemsPage,function(err,categorias,total){
        if(err){
            res.status(500).send({message:"Error de peticion"});
        }else{
            if(!categorias){
                res.status(400).send({message:"No hay categorias"});
            }else{
                console.log(categorias);
                // res.status(200).send({categorias});
                res.send(categorias);
            }
        }
    })
}
function addCategoria(req,res){
    var categoria = Categoria();
    var params = req.body;
    categoria.name = params.name;
    categoria.photo = "null";

    if(params.name != null){
        categoria.save((err,categoriaSaved)=>{
            res.status(200).send({message:"Categoria registrada "+ params.name});
        });
    }else{
        res.status(400).send({message:"Ingresa correctamente el nombre"});
    }

}

function uploadImage(req,res){
    var categoriaId = req.params.id;
    var file_name = "No subido..";
    if(req.files){
        var file_path = req.files.photo.path;
        var file_split = file_path.split('\\');
        var file_name = file_split[0];

        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];

        if(file_ext == 'jpg' || file_ext == 'png' || file_ext == 'svg' || file_ext == 'psd'){
            Categoria.findByIdAndUpdate(categoriaId,{photo:file_name},(err,updateC)=>{
                res.status(200).send({message:"Imagen subida"});
            });
        }else{
            res.status(200).send({message:"Extencion incorrecta"});
        }

        console.log(file_ext);
    }else{
        res.status(200).send({message:"Imagen no subida"});
    }
}

function getImage(req,res){
    var image_file = req.params.imageFile;
    var path_file = './Uploads/Categorias/'+image_file;
    fs.exists(path_file,function(exists){
        if(exists){
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message:"No existe la imagen"});
        }
    })
}

module.exports = {

    pruebas,
    getCategorias,
    addCategoria,
    uploadImage,
    getImage

};