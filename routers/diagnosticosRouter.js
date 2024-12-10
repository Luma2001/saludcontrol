const express = require('express');
const router = express.Router();

//Importo las funciones de Controller.js
        const {mostrarDiagnosticos,buscarDiagnostico,agregarDiagnostico,actualizarDiagnostico,borrarDiagnosticos} = require("../controllers/diagnosticosControllers.js")

router.get("/", mostrarDiagnosticos);
router.get("/:id",buscarDiagnostico);
router.post("/", agregarDiagnostico);
router.put("/:id", actualizarDiagnostico);
router.delete("/:id",borrarDiagnosticos);

module.exports = router;