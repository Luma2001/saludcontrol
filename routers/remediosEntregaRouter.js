const express = require('express');
const router = express.Router();

//importo las funciones de Controller
const {mostrarEntregas, buscarEntrega,agregarEntrega} = require("../controllers/remediosEntregaControllers")

router.get("/", mostrarEntregas);
router.get("/:id", buscarEntrega);
router.post("/", agregarEntrega);


module.exports = router;