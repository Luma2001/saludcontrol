const db = require("../data/db.js");

const {DataTypes} = require("sequelize"); 
const turnoModel = require("./turnosModel.js");

const diagnosticoModel = db.define("diagnostico",{
    informe:{type:DataTypes.STRING},
    volver:{type:DataTypes.STRING},
    motivo:{type:DataTypes.STRING},
    codT:{type:DataTypes.INTEGER, 
            references:{
                model:"turno",
                key:"id"
            }
    }
})

module.exports = diagnosticoModel

diagnosticoModel.belongsTo(turnoModel, {foreignKey: "codT", as:'turno'})