const db=require("../data/db.js");

const{DataTypes} = require("sequelize");
const medicoModel = require("./medicosModel.js");
const pacienteModel = require("./pacientesModel.js");
const estadoModel = require("./estadoModel.js");

const turnoModel = db.define ("turno", {
    // codT:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    // cuando utilizo una primary key personalizada, debo configurarla de esta forma. 
    //En sequelize si mi primary key se llama id no necesito hacer esto,
    // Sequelize lo hace automáticamente y no se debe incluir en el  modelo de la bbdd
    Fecha:{type:DataTypes.DATE},
    Hora:{type:DataTypes.TIME},
    Motivo:{type:DataTypes.STRING},
    Orden_SoN:{type:DataTypes.BOOLEAN},
    codMed:{type:DataTypes.INTEGER,
                  references:{
                    model:"profesional",
                    key:"id"
                  }
    },
    codU:{type:DataTypes.INTEGER,
              references:{
                model:"usuario",
                key:"id"
              }    
    },
    IDE:{type:DataTypes.INTEGER,
            references:"estado",
            key:"id"
    },
})

//Relaciones
turnoModel.belongsTo(medicoModel, {foreignKey:"codMed", as:'profesional'})
turnoModel.belongsTo(pacienteModel, {foreignKey:"codU", as:'paciente'})
turnoModel.belongsTo(estadoModel, {foreignKey:"IDE", as:'estado'})

module.exports = turnoModel