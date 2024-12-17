const db = require("../data/db.js");

const {DataTypes} = require("sequelize");

const remediosCompraModel = db.define("remedio_compra",{
    codrem:{type:DataTypes.INTEGER},
    cantidad:{type:DataTypes.INTEGER},
    fecha:{type:DataTypes.DATEONLY}
})

module.exports = remediosCompraModel