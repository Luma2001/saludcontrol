const db = require("../data/db.js");

const {DataTypes} = require("sequelize");
const especialidadModel = require("./especialidadModel.js");
const consultorioModel = require("./consultorioModel.js");

const medicoModel = db.define ("profesional", {
    nombre: {type:DataTypes.STRING},
    apellido: {type:DataTypes.STRING},
    codEsp: {type:DataTypes.INTEGER,
                 references:{
                    model:"especialidad",
                    key:"id"
                 }    
    },
    tel:{type:DataTypes.STRING},
    turno: {type:DataTypes.STRING},
    foto: {type:DataTypes.STRING},
    codcon: {type:DataTypes.INTEGER,
                  references:{
                    model:"consultorio",
                    key:"id"
                  }
    }
})


medicoModel.belongsTo(especialidadModel, {foreignKey:"codEsp", as:'especialidad'});
medicoModel.belongsTo(consultorioModel, {foreignKey:"codcon", as:'consultorio'});//Analizar bbdd. Un médico puedo atender en distintos consultorios, y un consultorio tiene varios médicos. Por ahora dejo esta relación donde el médico sólo atiende en un consultorio


module.exports = medicoModel