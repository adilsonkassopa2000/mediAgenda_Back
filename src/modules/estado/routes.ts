import { Router } from "express";
import { EstadoController } from "./estado.Controller.js";
const estadoRota = Router()

const estadoController = new EstadoController()

estadoRota.post('/create',estadoController.create)
estadoRota.get('/',estadoController.get)


export {estadoRota}