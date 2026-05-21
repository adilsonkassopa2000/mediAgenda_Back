import { Router } from "express";
import { ConsultaController } from "./consulta.Controller.js";
const consultaRota = Router()


const consultaController = new ConsultaController()

consultaRota.post('/create',consultaController.create)
consultaRota.get('/',consultaController.get)
consultaRota.put('/update',consultaController.update)
consultaRota.delete('/delete',consultaController.delete)

export {consultaRota}