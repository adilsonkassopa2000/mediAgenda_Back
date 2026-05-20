import { Router } from "express";
import { PacienteController } from "./paciente.Controller.js";
const routerPaciente = Router()

const pacienteController = new PacienteController()

routerPaciente.post('/create',pacienteController.create)
routerPaciente.get('/',pacienteController.get)
routerPaciente.put('/update',pacienteController.update)
routerPaciente.delete('/delete',pacienteController.delete)

export {routerPaciente}