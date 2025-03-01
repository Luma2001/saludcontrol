const { traerUnTurno } = require("../controllers/turnosControllers.js");
const db = require("../data/db.js")
const {DataTypes} = require("sequelize");
const turnoModel = require("./turnosModel.js");
const estadoModel = require("./estadoModel.js");

const estadoTurnoModel = db.define("estadoturno",{
    turnoId: {type:DataTypes.INTEGER,
        references:{
            model:"turno",
            key:"id"
        }
    },
    estadoId:{type:DataTypes.INTEGER,
        references:{
            model:"estado",
            key:"id"
        }
    }
})

module.exports = estadoTurnoModel;

estadoTurnoModel.belongsTo(turnoModel, {foreignKey:"turnoId", as:'turno'})
estadoTurnoModel.belongsTo(estadoModel, {foreignKey:"estadoId", as:'estado'})