const express = require('express');
const router = express.Router();

//importo las funciones de Paciente Controller
const {mostrarMedicos,buscarMedico,agregarMedico,actualizarMedico,borrarMedico} = require("../controllers/medicosControllers.js")

router.get("/", mostrarMedicos);
router.get("/:id", buscarMedico);
router.post("/", agregarMedico);
router.put("/:id", actualizarMedico);
router.delete("/:id", borrarMedico);//muy importante no olvidar colocar id

module.exports = router;