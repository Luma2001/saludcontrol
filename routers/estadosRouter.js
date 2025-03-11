const express = require('express');
const router = express.Router();

//importo las funciones de Estados Controller
const {mostrarEstados} = require("../controllers/estadoControllers.js");


router.get("/",mostrarEstados);

module.exports =router; //Por último hay que agregar las rutas en el