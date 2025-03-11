const express = require ("express");
const router = express.Router();

const {cambiarEstado} =require("../controllers/estadoTurnoControllers.js");

router.post("/agregar", cambiarEstado);

module.exports = router;