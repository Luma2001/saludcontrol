const consultorioModel = require("../models/consultorioModel.js")


//Funciones que muestran lista de consultorios guardados
        const mostrarConsultorios = async (req,res)=>{
            try {
                const consultorios = await consultorioModel.findAll();
                res.json(consultorios);
            } catch (error) {
                res.json({message:error.message})
            }
        }//ok en Thunder Mostrar Lista de Consultorios

        const traerUnConsultorio = async (req,res) =>{
            try {
                const id = parseInt(req.params.id);
                const consultorio = await consultorioModel.findByPk(id);
                res.json(consultorio);
                if(!consultorio){
                    return res.status(404).json({ message: "Consultorio no encontrado" });
                }
                
            } catch (error) {
                res.status(500).json({message:error.message})                
            }
        }//ok en Thunder Buscar Consultorio

//Función que crea nuevo registro en la tabla  
        const agregarConsultorio = async (req,res)=>{
            try {
                await consultorioModel.create(req.body);
                res.json({"message":"Registro creado con éxito"})
            } catch (error) {
                res.status(500).json({message:error.message})                 
            }
        }//ok Thunder en Agregar consultorio

//Función para actualizar un registro en la tabla
        const actualizarConsultorio = async (req,res)=>{
            try {
                await consultorioModel.update(req.body,{
                    where: {id:req.params.id}
                })
                res.json({"message":"Consultorio actualizado correctamente"})
                
            } catch (error) {
                res.status(500).json({message:error.message})                      
            }
        }//ok En Thunder Actualizar datos Consultorio
        
//Para borrar registro de tabla
        const borrarConsultorio = async (req,res) => {
            try {
                await consultorioModel.destroy({
                    where:{id:req.params.id}
                })
                res.json({"message":"Registro eliminado correctamente"})
            } catch (error) {
                res.status(500).json({message:error.message})      
            }
        }//ok en Thunder Eliminar Consultorio       

//para exportar las funciones creadas
    module.exports = {mostrarConsultorios,traerUnConsultorio, agregarConsultorio, actualizarConsultorio,borrarConsultorio}        