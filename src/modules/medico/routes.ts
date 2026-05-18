import { Router } from "express";
import { MedicoController } from "./medico.controller.js";
const routerMedico = Router()

const medicoController = new MedicoController()

routerMedico.post('/create',medicoController.create)
routerMedico.get('/',medicoController.get)
routerMedico.put('/update',medicoController.update)
routerMedico.delete('/delete',medicoController.delete)



export {routerMedico}