const db=require("../data/db.js");

const {DataTypes} = require("sequelize");

const estadoModel = db.define("estado",{
    detalle: {type:DataTypes.STRING},
})

module.exports = estadoModel;