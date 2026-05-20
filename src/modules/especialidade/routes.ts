import { Router } from "express";
import { EspecialidadeController } from "./especilaidade.Controller.js";
const especialRouter = Router()
const especialidadeController = new EspecialidadeController()


especialRouter.post('/create',especialidadeController.create)
especialRouter.get('/',especialidadeController.get)
especialRouter.put('/update',especialidadeController.update)
especialRouter.delete('/delete',especialidadeController.delete)


export {especialRouter}