const express = require ("express");
const router = express.Router();
const {traerTurnos,traerUnTurno, turnoFecha,crearTurno, actualizarTurno, borrarTurno} = require("../controllers/turnosControllers.js");

router.get("/",traerTurnos);
router.get("/:id",traerUnTurno);
router.get("/entre/:desde/:hasta", turnoFecha);
router.post("/", crearTurno);
router.put("/:id", actualizarTurno);
router.delete("/:id", borrarTurno);

module.exports = router;