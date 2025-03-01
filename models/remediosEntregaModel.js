const db = require("../data/db.js");

const {DataTypes} = require("sequelize");
const remedioModel = require("./remediosModel.js");

const remediosEntregaModel = db.define("remedio_entrega",{
    codrem:{type:DataTypes.INTEGER,
        references:{
            model:"remedio",
            key:"id"
        }
    },
    cantidad:{type:DataTypes.INTEGER},
    fecha:{type:DataTypes.DATE}
})


remediosEntregaModel.belongsTo(remedioModel,{foreignKey:"codrem", as:'remedio'})


module.exports = remediosEntregaModel