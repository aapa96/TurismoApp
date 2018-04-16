'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CategoriaSchema = new Schema({
	name: String,
	photo: String
});

module.exports = mongoose.model('Categoria', CategoriaSchema);