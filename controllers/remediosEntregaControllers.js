const entregasModel = require("../models/remediosEntregaModel");
const remedioModel = require("../models/remediosModel");

//Funciones que traen registros guardados
    const mostrarEntregas = async (req,res)=>{
        try {
            const entregas = await entregasModel.findAll(
                {
                    include:{
                        model: remedioModel,
                        as: 'remedio',
                        attributes:['nombre']
                    }
                }
            );
            res.json(entregas)
        } catch (error) {
            res.json({message:error.message})
        }
    };//ok

    const buscarEntrega =async  (req,res)=>{
        try {
            //console.log("Params recieved: " , req.params.id);
            const id = parseInt(req.params.id)
            const entrega = await entregasModel.findByPk(id);
            res.json(entrega);

            if (!entrega) {
                return res.status(404).json({ message: "entrega not found" });
            }    

        } catch (error) {
            console.error("Error: "+ error.message);
            res.status(500).json({message:error.message})
        }
    };//ok


//Función que crea nuevo registro en la tabla
    const agregarEntrega= async (req,res)=>{
        try {
                await entregasModel.create(req.body);
                res.json({"message":"Registro creado con éxito"})
        } catch (error) {
            console.error("Error: "+ error.message);
            res.status(500).json({message:error.message})            
        }
    };//ok

//para exportar las funciones creadas
module.exports = {mostrarEntregas, buscarEntrega, agregarEntrega}