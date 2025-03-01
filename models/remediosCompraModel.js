const db = require("../data/db.js");

const {DataTypes} = require("sequelize");
const remedioModel = require("./remediosModel.js");

const remediosCompraModel = db.define("remedio_compra",{
    codrem:{type:DataTypes.INTEGER, 
                references:{
                    model:"remedio",
                    key:"id"
                }
    },
    cantidad:{type:DataTypes.INTEGER},
    fecha:{type:DataTypes.DATEONLY}
})

remediosCompraModel.belongsTo(remedioModel,{foreignKey:"codrem", as:'remedio'})

module.exports = remediosCompraModel
