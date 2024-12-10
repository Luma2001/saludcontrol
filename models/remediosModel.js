const db = require("../data/db.js");

const {DataTypes}= require("sequelize");

const remedioModel = db.define("remedio",{
    nombre:{type:DataTypes.STRING},
    droga:{type:DataTypes.STRING},
    stock:{type:DataTypes.INTEGER},
    presentacion:{type:DataTypes.STRING},
    diagnostico:{type:DataTypes.STRING},
    lista_actual:{type:DataTypes.BOOLEAN},
    codu:{type:DataTypes.INTEGER}
})

module.exports = remedioModel