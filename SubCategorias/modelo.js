
'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SubCategoriaSchema = new Schema({
	name: String,
    photo: String,
    categoria: [{ type: Schema.ObjectId, ref: "Categoria" }]
});

module.exports = mongoose.model('SubCategoria', SubCategoriaSchema);