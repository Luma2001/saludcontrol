const express = require ("express");
const router = express.Router();
const {traerTurnos,traerUnTurno, crearTurno, actualizarTurno, borrarTurno} = require("../controllers/turnosControllers.js");

router.get("/",traerTurnos);
router.get("/:id",traerUnTurno);
router.post("/", crearTurno);
router.put("/:id", actualizarTurno);
router.delete("/:id", borrarTurno);

module.exports = router;