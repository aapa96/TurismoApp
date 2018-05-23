'use strict'

var nodeMailer = require('nodemailer');
var fs = require('fs');
var path = require('path');
var contacto = require('./modelo');

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

    let params = req.body;
    // var message = contacto();
    var name = params.name;
    var email = params.email;
    var message = params.text;
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
        from: '"Java Nation | Web Page"'+name, // sender address
        to: 'aapa96@gmail.com', // list of receivers
        subject: "Private Event", // Subject line
        text: req.body.text, // plain text body
        html: '<h1>Java Nation | Contact Form </h1>'+'<br>'+
                '<h6>'+'Name: '+'</h6>'+'<p>'+name+'</p>'+'<br>'+
                '<h6>'+'Email: '+'</h6>'+'<p>'+email+'</p>'+'<br>'+
                '<h6>'+'Message: '+'</h6>'+'<p>'+message+'</p>'+'<br>'+
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

function privateEventJavaNation(req,res){
    var params = req.body;
    var fullname = params.fullname;
    var email = params.email;
    var phone = params.phone;
    var date = params.date;
    var people = params.people;
    var birthday = params.birthday;
    var business = params.business;
    var personal = params.personal;
    var other = params.other;
    var dj = params.dj;
    var catering = params.catering;
    var cake = params.cake;
    var message = params.message;



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
        from: '"Java Nation | Web Page"', // sender address
        to: 'aapa96@gmail.com', // list of receivers
        subject: "Private Event", // Subject line
        text: req.body.text, // plain text body
        html: '<h1>Java Nation | Private Event </h1>'+'<br>'+
                '<h6>'+'Full Name: '+'</h6>'+'<p>'+fullname+'</p>'+'<br>'+
                '<h6>'+'Email: '+'</h6>'+'<p>'+email+'</p>'+'<br>'+
                '<h6>'+'Phone: '+'</h6>'+'<p>'+phone+'</p>'+'<br>'+
                '<h6>'+'Date: '+'</h6>'+'<p>'+date+'</p>'+'<br>'+
                '<h6>'+'Number People: '+'</h6>'+'<p>'+people+'</p>'+'<br>'+
                '<h5>'+'Type: '+'</h5>'+'<br>'+
                '<h6>'+'Birthday Party: '+'</h6>'+'<p>'+birthday+'</p>'+'<br>'+
                '<h6>'+'Business meeting: '+'</h6>'+'<p>'+business+'</p>'+'<br>'+
                '<h6>'+'Personal meeting: '+'</h6>'+'<p>'+personal+'</p>'+'<br>'+
                '<h6>'+'Other: '+'</h6>'+'<p>'+other+'</p>'+'<br>'+
                '<h5>'+'Extras: '+'</h5>'+'<br>'+
                '<h6>'+'Dj: '+'</h6>'+'<p>'+dj+'</p>'+'<br>'+
                '<h6>'+'Catering: '+'</h6>'+'<p>'+catering+'</p>'+'<br>'+
                '<h6>'+'Cake: '+'</h6>'+'<p>'+cake+'</p>'+'<br>'+
                '<h6>'+'Message: '+'</h6>'+'<p>'+message+'</p>'+'<br>'+
                '<img src="cid:unique@cid"/>',
            attachments: [{
                filename: 'Prueba.jpg',
                path: './Uploads/Prueba.jpg',
                cid: 'unique@cid' //same cid value as in the html img src
            }]
    };



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json("No se envio su mensaje.")
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.status(200).send({message:"Mensaje enviado satisfactoriamente gracias.",mailOptions});
        });

    }
}

module.exports = {

    pruebas,
    registrarse,
    Contacto,
    ContactJavaNation,
    privateEventJavaNation
};