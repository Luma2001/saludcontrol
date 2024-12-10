const db=require("../data/db.js")

const {DataTypes} = require("sequelize");

const pacienteModel = db.define ("usuario", {
    // codU:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},//para utilizar mi clave primaria y no me cree id de forma automática
    dni:{type:DataTypes.STRING},
    obra_social:{type:DataTypes.STRING},
    numero:{type:DataTypes.STRING},
    segcod:{type:DataTypes.STRING},
    nombre:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    direccion:{type:DataTypes.STRING},
    tel:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING}

  })

module.exports = pacienteModel