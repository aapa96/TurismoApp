'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema({
	name: String,
	surname: String,
	email: String,
	password: String,
	role: String,
	create:Date
	// preferencias: [{ type: Schema.ObjectId, ref: "Categoria" }]

});


module.exports = mongoose.model('User', UserSchema);
