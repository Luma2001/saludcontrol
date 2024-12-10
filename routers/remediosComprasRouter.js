const express = require('express');
const router = express.Router();

//importo las funciones de Controller
const {mostrarCompras, buscarCompra,agregarCompra} = require("../controllers/remedioscomprasControllers")

router.get("/", mostrarCompras);
router.get("/:id", buscarCompra);
router.post("/", agregarCompra);


module.exports = router;