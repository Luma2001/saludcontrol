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

// //Relaciones
// turno.belongsTo(usuario, {foreignKey:"codU"})
// turno.belongsTo(profesional, {foreignKey:"codMed"})
// turno.belongsTo(profesional, {foreignKey:"codMed"})

module.exports = turnoModel