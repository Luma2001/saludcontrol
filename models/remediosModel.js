const db = require("../data/db.js");

const {DataTypes}= require("sequelize");
const pacienteModel = require("./pacientesModel.js");

const remedioModel = db.define("remedio",{
    nombre:{type:DataTypes.STRING},
    droga:{type:DataTypes.STRING(60)},
    marca:{type:DataTypes.STRING},
    stock:{type:DataTypes.INTEGER},
    presentacion:{type:DataTypes.STRING},
    diagnostico:{type:DataTypes.STRING},
    lista_actual:{type:DataTypes.BOOLEAN},
    codu:{type:DataTypes.INTEGER,
            references:{
                model:"usuario",
                key:"id"
            }
    }
})

remedioModel.belongsTo(pacienteModel,{foreignKey:"codu",as:'paciente'})
module.exports = remedioModel