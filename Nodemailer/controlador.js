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

function Contacto (req,res){
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
        from: '"Turismo APP"'+req.body.email, // sender address
        to: 'aranzagroup@gmail.com', // list of receivers
        subject: "Turismo App", // Subject line
        text: req.body.text, // plain text body
        html: '<h1>Turismo App</h1>'+'<br>'+
                '<p>'+req.body.text+'</p>'+
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


function ContactJavaNation(req,res){
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
        from: '"Java Nation | Web Page"'+req.body.email, // sender address
        to: 'aapa96@gmail.com', // list of receivers
        subject: "Private Event", // Subject line
        text: req.body.text, // plain text body
        html: '<h1>Java Nation | Private Event </h1>'+'<br>'+
                '<h6>'+'Name: '+'</h6>'+'<p>'+req.body.name+'</p>'+'<br>'+
                '<h6>'+'Email: '+'</h6>'+'<p>'+req.body.text+'</p>'+'<br>'+
                '<h6>'+'Message: '+'</h6>'+'<p>'+req.body.email+'</p>'+'<br>'+
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
    registrarse,
    Contacto,
    ContactJavaNation
};