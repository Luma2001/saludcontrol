const db = require ("../data/db.js");

const {DataTypes} = require("sequelize");


const consultorioModel = db.define ("consultorio",{
    nombre:{type:DataTypes.STRING},
    direccion:{type:DataTypes.STRING},
    tel:{type:DataTypes.STRING},
    web:{type:DataTypes.STRING},
    turno_por:{type:DataTypes.STRING}
})

module.exports = consultorioModel