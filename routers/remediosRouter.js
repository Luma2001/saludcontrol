const express = require('express');
const router = express.Router();

//importo las funciones de Paciente Controller
const {mostrarRemedios,buscarRemedio,agregarRemedio,actualizarRemedio,borrarRemedio} = require("../controllers/remediosControllers.js")

router.get("/", mostrarRemedios);
router.get("/:id", buscarRemedio);
router.post("/", agregarRemedio);
router.put("/:id", actualizarRemedio);
router.delete("/:id", borrarRemedio);//muy importante no olvidar colocar id

module.exports = router;