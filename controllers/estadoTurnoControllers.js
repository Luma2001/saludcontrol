//La tabla estadoturno me lleva un registro de cuándo fueron actualizados 
// los estados de cada turno.
//Cada turno se crea con un estado predeterminado llamado PEDIDO en la tabla turno.

const estadoTurnoModel = require ("../models/estadoTurnoModel.js");


//Creo registro en tabla
const cambiarEstado = async (req,res)=>{
    try {
        await estadoTurnoModel.create(req.body);
        res.json({"message":"Registro creado con éxito"})
    } catch (error) {
        console.error("Error: "+ error.message);
        res.status(500).json({message:error.message}) 
    }
}

//Para borrar registro de tabla
const borrarCambio = async (req,res)=>{
    try {
        await estadoTurnoModel.destroy({
            where:{id:req.params.id}
        })
        res.json({"message":"Registro eliminado correctamente"})
    } catch (error) {
        console.error("Error: "+ error.message);
        res.status(500).json({message:error.message})       
    }
}

module.exports = {cambiarEstado, borrarCambio};