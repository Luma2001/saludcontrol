const diagnosticoModel = require("../models/diagnosticosModel.js")


//Funciones que muestran diagnosticos guardados
        const mostrarDiagnosticos = async (req,res)=>{
            try {
                const diagnosticos = await diagnosticoModel.findAll();
                res.json(diagnosticos);
            } catch (error) {
                res.json({message:error.message})
            }
        }//

        const buscarDiagnostico = async (req,res) =>{
            try {
                const id = parseInt(req.params.id);
                const diagnostico = await diagnosticoModel.findByPk(id);
                res.json(diagnostico);
                if(!diagnostico){
                    return res.status(404).json({ message: "diagnostico no encontrado" });
                }
                
            } catch (error) {
                res.status(500).json({message:error.message})                
            }
        }//

//Función que crea nuevo registro en la tabla  
        const agregarDiagnostico = async (req,res)=>{
            try {
                await diagnosticoModel.create(req.body);
                res.json({"message":"Registro creado con éxito"})
            } catch (error) {
                res.status(500).json({message:error.message})                 
            }
        }//

//Función para actualizar un registro en la tabla
        const actualizarDiagnostico = async (req,res)=>{
            try {
                await diagnosticoModel.update(req.body,{
                    where: {id:req.params.id}
                })
                res.json({"message":"Consultorio actualizado correctamente"})
                
            } catch (error) {
                res.status(500).json({message:error.message})                      
            }
        }//
        
//Para borrar registro de tabla
        const borrarDiagnosticos = async (req,res) => {
            try {
                await diagnosticoModel.destroy({
                    where:{id:req.params.id}
                })
                res.json({"message":"Registro eliminado correctamente"})
            } catch (error) {
                res.status(500).json({message:error.message})      
            }
        }//       

//para exportar las funciones creadas
    module.exports = {mostrarDiagnosticos,buscarDiagnostico, agregarDiagnostico, actualizarDiagnostico,borrarDiagnosticos}        