import { Request, Response } from "express";
import { EstadoFactory } from "./estado.Factory.js";


const estadoFactory = new EstadoFactory()

export class EstadoController{
    async create(request:Request,response:Response){
        try{
            const {
                estado
            } = request.body

            return response.status(200).json(
                await estadoFactory.factory().execute(estado)
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
    
    async get(request:Request,response:Response){
        try{

            return response.status(200).json(
                await estadoFactory.factory().get()
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }
    }
}