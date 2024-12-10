const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const remediosEntregaModel = db.define("remedio_entrega",{
    codrem:{type:DataTypes.INTEGER},
    cantidad:{type:DataTypes.INTEGER},
    fecha:{type:DataTypes.DATE}
})

module.exports = remediosEntregaModel