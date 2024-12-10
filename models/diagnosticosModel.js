const db = require("../data/db.js");

const {DataTypes} = require("sequelize"); 

const diagnosticoModel = db.define("diagnostico",{
    informe:{type:DataTypes.STRING},
    volver:{type:DataTypes.STRING},
    motivo:{type:DataTypes.STRING},
    codT:{type:DataTypes.INTEGER}
})

module.exports = diagnosticoModel