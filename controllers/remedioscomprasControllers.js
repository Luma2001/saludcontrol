const comprasModel = require("../models/remediosCompraModel");
const remedioModel = require("../models/remediosModel");

//Funciones que traen registros guardados
    const mostrarCompras = async (req,res)=>{
        try {
            const compras = await comprasModel.findAll({
                include:{
                    model: remedioModel,
                    as: 'remedio',
                    attributes:['nombre']
                }
            });
            res.json(compras)
        } catch (error) {
            res.json({message:error.message})
        }
    };//ok

    const buscarCompra =async  (req,res)=>{
        try {
            //console.log("Params recieved: " , req.params.id);
            const id = parseInt(req.params.id)
            const compra = await comprasModel.findByPk(id);
            res.json(compra);

            if (!compra) {
                return res.status(404).json({ message: "compra not found" });
            }    

        } catch (error) {
            console.error("Error: "+ error.message);
            res.status(500).json({message:error.message})
        }
    };//ok


//Función que crea nuevo registro en la tabla
    const agregarCompra= async (req,res)=>{
        try {
                await comprasModel.create(req.body);
                res.json({"message":"Registro creado con éxito"})
        } catch (error) {
            console.error("Error: "+ error.message);
            res.status(500).json({message:error.message})            
        }
    };//ok

//para exportar las funciones creadas
module.exports = {mostrarCompras, buscarCompra, agregarCompra}