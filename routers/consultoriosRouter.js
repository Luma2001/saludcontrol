const express = require('express');
const router = express.Router();

//Importo las funciones de consultorioController.js
        const {mostrarConsultorios,traerUnConsultorio,agregarConsultorio,actualizarConsultorio,borrarConsultorio} = require("../controllers/consultorioControllers.js")

router.get("/", mostrarConsultorios);
router.get("/:id", traerUnConsultorio);
router.post("/", agregarConsultorio);
router.put("/:id", actualizarConsultorio);
router.delete("/:id",borrarConsultorio);

module.exports = router;
