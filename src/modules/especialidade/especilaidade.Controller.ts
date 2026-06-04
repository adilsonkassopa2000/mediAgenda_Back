import { Request, Response } from "express";
import { EspecialidadeFactory } from "./especialidade.Factory.js";

const especialidadeFactory = new EspecialidadeFactory()


export class EspecialidadeController{
    async create(request:Request,response:Response){
        try{
            const {
                especialidade,
                descricao
            } = request.body

            return response.status(200).json(
                await especialidadeFactory.factory().execute({
                    especialidade,
                    descricao
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
                img,
                slots
            } = request.body

            const updatePayload: any = {
                especialidade,
                descricao,
                img
            }
            if (slots !== undefined) {
                updatePayload.slots = Number(slots || 0)
            }

            return response.status(200).json(
                await especialidadeFactory.factory().update(id, updatePayload)
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

            const requestId = id || String(request.query.id || '');
            if (!requestId) {
                throw new Error('ID da especialidade não fornecido');
            }

            return response.status(200).json(
                await especialidadeFactory.factory().delete(requestId)
            )

        }catch(err:any){
            const message = err?.message || 'Erro ao remover especialidade';
            if (err?.code === 'P2003' || message.includes('Foreign key constraint')) {
                return response.status(400).json({
                    message: 'Não é possível remover esta especialidade porque existem médicos ou consultas associados a ela.'
                })
            }
            return response.status(400).json({
                message
            })
        }

    }
}