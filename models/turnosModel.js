const db=require("../data/db.js");

const{DataTypes} = require("sequelize");

const turnoModel = db.define ("turno", {
    // codT:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Fecha:{type:DataTypes.DATE},
    Hora:{type:DataTypes.TIME},
    Motivo:{type:DataTypes.STRING},
    Orden_SoN:{type:DataTypes.BOOLEAN},
    codMed:{type:DataTypes.INTEGER},
    codU:{type:DataTypes.INTEGER},
    IDE:{type:DataTypes.INTEGER},
})

module.exports = turnoModel