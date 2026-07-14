import { Request, Response } from "express"
import { VagaFactory } from "./vaga.Factory.js"

const vagaFactory = new VagaFactory()

export class VagaController{
    async create(request:Request,response:Response){
        try{
            const {
                data,
                hora,
                medicoId,
	        estadoId
            } = request.body
		

            return response.status(200).json(
                await vagaFactory.factory().execute({
                    data,
                    hora,
                    medicoId,
		            estadoId
                })
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
                await vagaFactory.factory().get()
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }

    async update(request:Request,response:Response){
        try{
            const {
                id,
                data
            } = request.body

            return response.status(200).json(
                await vagaFactory.factory().update(id,data)
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }

    async delete(request:Request,response:Response){
        try{
            const {
                id
            } = request.body

            return response.status(200).json(
                await vagaFactory.factory().delete(id)
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }
}
