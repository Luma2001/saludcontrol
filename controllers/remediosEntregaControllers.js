const entregasModel = require("../models/remediosEntregaModel");

//Funciones que traen registros guardados
    const mostrarEntregas = async (req,res)=>{
        try {
            const entregas = await entregasModel.findAll();
            res.json(entregas)
        } catch (error) {
            res.json({message:error.message})
        }
    };//

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
    };//


//Función que crea nuevo registro en la tabla
    const agregarEntrega= async (req,res)=>{
        try {
                await entregasModel.create(req.body);
                res.json({"message":"Registro creado con éxito"})
        } catch (error) {
            console.error("Error: "+ error.message);
            res.status(500).json({message:error.message})            
        }
    };//

//para exportar las funciones creadas
module.exports = {mostrarEntregas, buscarEntrega, agregarEntrega}