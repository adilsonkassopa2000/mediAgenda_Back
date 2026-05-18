import { Request, Response } from "express";
import { MedicoFactory } from "./medico.factory.js";

const medicoFactory = new MedicoFactory()

export class MedicoController{
    async create(request:Request,response:Response){
        try{
            const {
                nome,
                escola,
                anoExperiencia,
                especialidadeId,
                estadoId,
                userId,
                createdAt,
                updatedAt
            } = request.body

            return response.status(200).json(
                await medicoFactory.factory().execute({
                    nome,
                    escola,
                    anoExperiencia,
                    especialidadeId,
                    estadoId,
                    userId,
                    createdAt,
                    updatedAt
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
                await medicoFactory.factory().get()
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
                await medicoFactory.factory().update(id, data)
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
                await medicoFactory.factory().delete(id)
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }
}