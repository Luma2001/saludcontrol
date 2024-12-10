const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const medicoModel = db.define ("profesional", {
    nombre: {type:DataTypes.STRING},
    apellido: {type:DataTypes.STRING},
    especialidad: {type:DataTypes.STRING},
    tel:{type:DataTypes.STRING},
    turno: {type:DataTypes.STRING},
    codcon: {type:DataTypes.INTEGER}
})

module.exports = medicoModel