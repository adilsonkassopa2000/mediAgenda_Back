import { Request, Response } from "express";
import { EspecialidadeFactory } from "./especialidade.Factory.js";

const especialidadeFactory = new EspecialidadeFactory()


export class EspecialidadeController{
    async create(request:Request,response:Response){
        try{
            const {
                especialidade,
                descricao,
                img
            } = request.body

            return response.status(200).json(
                await especialidadeFactory.factory().execute({
                    especialidade,
                    descricao,
                    img
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
                await especialidadeFactory.factory().get()
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
                especialidade,
                descricao,
                img
            } = request.body

            return response.status(200).json(
                await especialidadeFactory.factory().update(id, {
                    especialidade,
                    descricao,
                    img
                })
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
                await especialidadeFactory.factory().delete(id)
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }
}