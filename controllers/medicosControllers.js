const medicosModel = require("../models/medicosModel.js");
const especialidadModel = require("../models/especialidadModel.js");
const consultorioModel = require("../models/consultorioModel.js");

//Funciones que traen registros guardados
        const mostrarMedicos = async (req,res)=>{
            try {
                const medicos = await medicosModel.findAll({
                    include:[
                        {
                            model: especialidadModel,
                            as: 'especialidad',
                            attributes:['nombre']
                        },
                        {
                            model:consultorioModel,
                            as:'consultorio',
                            attributes:['nombre', 'direccion', 'tel', 'turno_por']
                        }]
                    
                        
                    
                });
                res.json(medicos)
                console.log(medicos.map(med => med.toJSON()))
            } catch (error) {
                res.json({message:error.message})
            }
        };//ok

        const buscarMedico =async  (req,res)=>{
            try {
                //console.log("Params recieved: " , req.params.id);
                const id = parseInt(req.params.id)
                const medico = await medicosModel.findByPk(id);
                res.json(medico);

                if (!medico) {
                    return res.status(404).json({ message: "medico not found" });
                }    

            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})
            }
        };//ok

        const buscarEspecialistas = async (req,res)=>{
            try {

                const medicos = await medicosModel.findAll({
                    where: {
                        codEsp:req.params.codEsp,
                    },
                });
                res.json(medicos);

                if (!medicos) {
                    return res.status(404).json({ message: "medicos not found" });
                }    

            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})
            }
        };//se modificó ver si funciona


//Función que crea nuevo registro en la tabla
        const agregarMedico= async (req,res)=>{
            try {
                    await medicosModel.create(req.body);
                    res.json({"message":"Registro creado con éxito"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})            
            }
        };//ok


//Función para actualizar un registro en la tabla
        const actualizarMedico= async (req,res)=>{
            try {
                await medicosModel.update(req.body,{
                    where: {id:req.params.id}
                })
                res.json({"message":"Registro actualizado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})                    
            }
        }//ok


//Para borrar registro de tabla
        const borrarMedico = async (req,res)=>{
            try {
                await medicosModel.destroy({
                    where:{id:req.params.id}
                })
                res.json({"message":"Registro eliminado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})       
            }
        }//ok

//para exportar las funciones creadas
module.exports = {mostrarMedicos, buscarMedico, buscarEspecialistas,agregarMedico,actualizarMedico, borrarMedico} //son utilizados para hacer las rutas

