const remedioModel = require("../models/remediosModel.js")
const {Op} = require ("sequelize");

//Funciones que traen registros guardados
        const mostrarRemedios = async (req,res)=>{
            try {
                const remedios = await remedioModel.findAll();
                res.json(remedios)
            } catch (error) {
                res.json({message:error.message})
            }
        };//ok 

        const buscarRemedio = async  (req,res)=>{
            try {
                //console.log("Params recieved: " , req.params.id);
                const id = parseInt(req.params.id)
                const remedio = await remedioModel.findByPk(id);
                res.json(remedio);

                if (!remedio) {
                    return res.status(404).json({ message: "Remedio not encontrado" });
                }    

            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})
            }
        };//ok

        const verRemediosDe = async (req,res)=>{
            try {
                const remedios = await remedioModel.findAll({
                    where: {
                        codU:req.params.codU,
                    },
                });
                res.json(remedios)
            } catch (error) {
                res.json({message:error.message})
            }
        };//ok se filtra lista de remedios por paciente

        const verRemEstadoDe = async(req,res)=>{
            try {
                const remedios = await remedioModel.findAll({
                    where: {
                        codU:req.params.codU,
                        lista_actual:req.params.enlista,
                    },
                });
                res.json(remedios)
            } catch (error) {
                res.json({message:error.message})
            }
        }//ok se filtra lista de remedios por paciente y si pertenece a la lista actual o no

        const bajoStockRemedios = async (req,res)=>{
            try {
                const remedios = await remedioModel.findAll({
                    attributes:["nombre","stock"],
                    where: {
                        stock:{
                            [Op.lte]:1,
                        }
                    },
                });
                res.json(remedios)
            } catch (error) {
                res.json({message:error.message})
            }            
        }//ok muestra los remedios que poseen bajo stock


//Función que crea nuevo registro en la tabla
        const agregarRemedio= async (req,res)=>{
            try {
                    await remedioModel.create(req.body);
                    res.json({"message":"Registro creado con éxito"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})            
            }
        };//ok


//Función para actualizar un registro en la tabla
        const actualizarRemedio = async (req,res)=>{
            try {
                await remedioModel.update(req.body,{
                    where: {id:req.params.id}
                })
                res.json({"message":"Registro actualizado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})                    
            }
        }//ok


//Para borrar registro de tabla
        const borrarRemedio = async (req,res)=>{
            try {
                await remedioModel.destroy({
                    where:{id:req.params.id}
                })
                res.json({"message":"Registro eliminado correctamente"})
            } catch (error) {
                console.error("Error: "+ error.message);
                res.status(500).json({message:error.message})       
            }
        }//ok

//para exportar las funciones creadas
        module.exports = {mostrarRemedios, buscarRemedio,verRemediosDe,verRemEstadoDe,bajoStockRemedios,agregarRemedio,actualizarRemedio,borrarRemedio}

