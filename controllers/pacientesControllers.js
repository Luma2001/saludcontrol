const pacienteModel = require("../models/pacientesModel.js")

//Funciones que traen registros guardados
        const traerPacientes = async (req,res)=>{
            try {
                const pacientes = await pacienteModel.findAll();
                res.json(pacientes)
            } catch (error) {
                res.json({message:error.message})
            }
        };//ok en thunder mostrar todos los usuarios

        const traerUnPaciente =async  (req,res)=>{
            try {
                //console.log("Params recieved: " , req.params.id);
                const id = parseInt(req.params.id)
                const paciente = await pacienteModel.findByPk(id);
                res.json(paciente);

                if (!paciente) {
                    return res.status(404).json({ message: "Paciente not found" });
                }    

            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})
            }
        };//ok en thunder seleccionar un paciente


//Función que crea nuevo registro en la tabla
        const crearPaciente= async (req,res)=>{
            try {
                    await pacienteModel.create(req.body);
                    res.json({"message":"Registro creado con éxito"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})            
            }
        };//ok en thunder Ingresar nuevo paciente


//Función para actualizar un registro en la tabla
        const actualizarPaciente = async (req,res)=>{
            try {
                await pacienteModel.update(req.body,{
                    where: {id:req.params.id}
                })
                res.json({"message":"Registro actualizado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})                    
            }
        }//ok en Thunder Actualizar datos paciente


//Para borrar registro de tabla
        const borrarPaciente = async (req,res)=>{
            try {
                await pacienteModel.destroy({
                    where:{id:req.params.id}
                })
                res.json({"message":"Registro eliminado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})       
            }
        }//ok en Thunder Eliminar Paciente

//para exportar las funciones creadas
module.exports = {traerPacientes, traerUnPaciente, crearPaciente,actualizarPaciente, borrarPaciente}

