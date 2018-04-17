
'use strict'
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MensajeSchema = new Schema({
	name: String,
    email: String,
    subject:String,
    mensaje: String
});

module.exports = mongoose.model('Mensaje', MensajeSchema);