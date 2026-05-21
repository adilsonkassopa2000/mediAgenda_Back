import { Router } from "express";
import { MedicoController } from "./medico.controller.js";
const medicoRota = Router()

const medicoController = new MedicoController()

medicoRota.post('/create',medicoController.create)
medicoRota.get('/',medicoController.get)
medicoRota.put('/update',medicoController.update)
medicoRota.delete('/delete',medicoController.delete)



export {medicoRota}