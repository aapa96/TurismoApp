'use strict'

var nodeMailer = require('nodemailer');
var fs = require('fs');
var path = require('path');

function pruebas(req,res){
	res.status(200).send({
		message:"Controlador de nodemailer listo"
	});
}
function registrarse(req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'aapa96@gmail.com',
            pass: '958897198'
        }
    });
    
    let mailOptions = {
        from: '"Turismo APP" <aranzagroup@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: "Turismo App", // Subject line
        text: "Esto es una prueba", // plain text body
        html: '<h1>Turismo App</h1>'+'<br>'+
                '<p>Gracias por registrarse.</p>'+
                '<img src="cid:unique@cid"/>',
            attachments: [{
                filename: 'Prueba.jpg',
                path: './Uploads/Prueba.jpg',
                cid: 'unique@cid' //same cid value as in the html img src
            }]
    };



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.status(200).send({message:"Mensaje enviado satisfactoriamente gracias.",mailOptions});
        });
}

module.exports = {

    pruebas,
    registrarse
};