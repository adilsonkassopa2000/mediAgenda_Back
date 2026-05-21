import { Router } from "express";
import { PacienteController } from "./paciente.Controller.js";
const pacienteRota = Router()

const pacienteController = new PacienteController()

pacienteRota.post('/create',pacienteController.create)
pacienteRota.get('/',pacienteController.get)
pacienteRota.put('/update',pacienteController.update)
pacienteRota.delete('/delete',pacienteController.delete)

export {pacienteRota}