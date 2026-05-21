import { Router } from "express";
import { EspecialidadeController } from "./especilaidade.Controller.js";
const especialidadeRota = Router()
const especialidadeController = new EspecialidadeController()


especialidadeRota.post('/create',especialidadeController.create)
especialidadeRota.get('/',especialidadeController.get)
especialidadeRota.put('/update',especialidadeController.update)
especialidadeRota.delete('/delete',especialidadeController.delete)


export {especialidadeRota}