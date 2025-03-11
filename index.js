const express = require("express");
const app = express();
const port = process.env.PORT||3030;
const cors= require("cors");

app.use(cors());
app.use(express.json());


//importo rutas
        const consultoriosRouter = require("./routers/consultoriosRouter.js")
        const diagnosticoRouter = require("./routers/diagnosticosRouter.js")
        const estadosRouter =require("./routers/estadosRouter.js")
        const medicosRouter = require("./routers/medicosRouter.js");       
        const remediosRouter = require("./routers/remediosRouter.js")
        const remediosComprasRouter = require("./routers/remediosComprasRouter.js");
        const remediosEntregaRouter = require("./routers/remediosEntregaRouter.js");
        const turnosRouter = require("./routers/turnosRouter.js");
        const estadoTurnoRouter = require("./routers/estadoTurnoRouter.js");
        const pacientesRouter = require("./routers/pacientesRouter.js");


//Rutas creadas
        // app.get ("/", (req,res)=>{res.send('Hola Mundo!')});//sin modularizar
        app.use ("/consultorios", consultoriosRouter);
        app.use("/diagnosticos", diagnosticoRouter);
        //app.use ("/especialidades", especialidadesRouter); Ver si es necesario hacer
        app.use ("/estados", estadosRouter); 
        app.use ("/estadoturno", estadoTurnoRouter); 
        app.use("/medicos", medicosRouter);
        app.use("/remedios", remediosRouter);
        app.use("/compras", remediosComprasRouter);
        app.use("/entregas", remediosEntregaRouter);
        app.use ("/turnos",turnosRouter);
        app.use ("/paciente", pacientesRouter);


//importo credenciales para conectarme a la base de datos
        const db = require ("./data/db.js");   
             
//Conexión con autenticación a la base de datos. Fc asincrónica
        const conexiondb = async ()=>{
            try {
                await db.authenticate();
                console.log("Conexión ok a base de datos");
            } catch (error) {
                console.log(`Error de conexión: ${error}`);
            }
        }//ok

//Levanto Servidor
        app.listen(port, ()=>{
            conexiondb();
            console.log(`Server Ok en el puerto ${port}: http://localhost:${port}`);
        });//ok
