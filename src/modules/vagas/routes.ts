import { Router } from "express";
import { VagaController } from "./vaga.Controller.js";
const vagaRota = Router()
const vagaController = new VagaController()

vagaRota.post('/create',vagaController.create)
vagaRota.get('/',vagaController.get)
vagaRota.put('/update',vagaController.update)
vagaRota.delete('/delete',vagaController.delete)

export {vagaRota}