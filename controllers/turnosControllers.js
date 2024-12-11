const turnoModel = require(("../models/turnosModel.js"));
const { Op } = require("sequelize");

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

        const turnoFecha = async (req,res)=>{
            try {
                const {desde,hasta} = req.params;
                //Validando formato y esxistencia de las fechas
                const fechaDesde = new Date(desde);
                const fechaHasta = new Date(hasta);

                if (isNaN(fechaDesde) || isNaN(fechaHasta)){
                    return res.status (400).json({message:"Fecha inválidas. Use el formato YYYY-MM-DD."});
                }
                
                if (fechaDesde>fechaHasta) {
                    return res.status(400).json({message:"La fecha 'desde' no puede ser mayor que la fecha 'hasta'."});
                }

                const turnos = await turnoModel.findAll({
                    where:{
                        fecha:{
                            [Op.between]: [req.params.desde, req.params.hasta],
                        }
                    }
                });
                res.json(turnos)
                if(!turnos) {
                    return res.status(404).json({message:"Turnos no encontrado"});
                }
            } catch (error) {
                res.json({message:error.message})
            }
        }//filtra turnos entre dos fechas


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
module.exports = {traerTurnos, traerUnTurno, turnoFecha,crearTurno, actualizarTurno, borrarTurno};