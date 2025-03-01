//se genera tabla especialidades para llevar un registro de especialidades médicas

const especialidadModel = require("../models/especialidadModel");

//Función que crea nuevo registro en la tabla  
const agregarEspecialidad = async (req,res)=>{
    try {
        await especialidadModel.create(req.body);
        res.json({"message":"Registro creado con éxito"})
    } catch (error) {
        res.status(500).json({message:error.message})                 
    }
}//

module.exports = {agregarEspecialidad}