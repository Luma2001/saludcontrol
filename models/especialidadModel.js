const db=require("../data/db.js");

const {DataTypes} = require("sequelize");

const especialidadModel = db.define("especialidad",{
    nombre: {type:DataTypes.STRING},
})

module.exports = especialidadModel;