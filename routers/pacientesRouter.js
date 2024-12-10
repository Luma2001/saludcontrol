const express = require('express');
const router = express.Router();

//importo las funciones de Paciente Controller
const {traerPacientes, traerUnPaciente,crearPaciente, actualizarPaciente, borrarPaciente} = require("../controllers/pacientesControllers.js")

router.get("/", traerPacientes);
router.get("/:id", traerUnPaciente);
router.post("/", crearPaciente);
router.put("/:id", actualizarPaciente);
router.delete("/:id", borrarPaciente);//muy importante no olvidar colocar id

module.exports = router;