const turnoModel = require(("../models/turnosModel.js"))

//Funciones que traen registros guardados
        const traerTurnos = async (req,res)=>{
            try {
                const turnos = await turnoModel.findAll();
                res.json(turnos)
            } catch (error) {
                res.json({message:error.message})
            }
        };//ok en thunder mostrar turnos

        const traerUnTurno = async (req,res)=>{
            try {
                const id = parseInt(req.params.id)
                const turno = await turnoModel.findByPk(id);
                res.json(turno);

                if(!turno) {
                    return res.status(404).json({message:"Turno no encontrado"});
                }
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})        
            }
        };//ok en thunder Buscar un turno


//Funciones que crean nuevos registros en la tabla
        const crearTurno= async (req,res)=>{
            try {
                    await turnoModel.create(req.body);
                    res.json({"message":"Registro creado con éxito"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})            
            }
        }//ok thunder Crear turno


//Función para actualizar un registro en la tabla
        const actualizarTurno = async (req,res)=>{
            try {
                await turnoModel.update(req.body,{
                    where: {id:req.params.id}
                })
                res.json({"message":"Registro actualizado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})                    
            }
        }//ok en Thunder Actualizar datos turno


//Para borrar registro de tabla
        const borrarTurno = async (req,res)=>{
            try {
                await turnoModel.destroy({
                    where:{id:req.params.id}
                })
                res.json({"message":"Registro eliminado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})       
            }
        }//ok en Thunder Eliminar turno


//para exportar las funciones creadas
module.exports = {traerTurnos, traerUnTurno, crearTurno, actualizarTurno, borrarTurno};