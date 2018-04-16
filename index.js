// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/turismo',(err,res)=>{
    if(err){
		throw  err;
	}else{
		console.log("La base de datos esta corriendo en el port 27017");		
        app.listen(port,function(){
            console.log("Servidor Corriendo en el puerto: "+ port);
        });
	}
});








