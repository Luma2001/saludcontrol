//ver si es necesario hacer

const estadoModel = require("../models/estadoModel.js");

//La tabla estado es una tabla que utilizo sólo para tener un registro de los estados disponibles.
//No debe ser modificado por el usuario.
// Es llamado por turno para llevar un seguimiento del estado del mismo.
const mostrarEstados = async (req,res)=>{
    try {
        const respuesta = await estadoModel.findAll();
        res.json(respuesta);
    } catch (error) {
        res.json({message:error.message})
    }
}//fin mostrarEstados



//

//Luego la tabla estadoturno la utilizo para lanzar un trigger que actualiza el 
// estado en la tabla turno. 
//La tabla estadoturno me queda un registro de cuando fueron actualizados los estados de cada turno.
//Cada turno se crea con un estado predeterminado llamado PEDIDO

//para exportar las funciones creadas
module.exports = {mostrarEstados}