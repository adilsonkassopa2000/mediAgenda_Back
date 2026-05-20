import { Request, Response } from "express"
import { PacienteFactory } from "./paciente.Factory.js"

const pacienteFactory = new PacienteFactory()


export class PacienteController{
    async create(request:Request,response:Response){
        try{
            const {
                nome,
                NIF,
                SNS,
                dataNascimento,
                sexo,
                phone,
                morada,
                userId
            } = request.body

            return response.status(200).json(
                await pacienteFactory.factory().execute({
                    nome,
                    NIF,
                    SNS,
                    dataNascimento,
                    sexo,
                    phone,
                    morada,
                    userId
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
                await pacienteFactory.factory().get()
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
                await pacienteFactory.factory().update(id, data)
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
                await pacienteFactory.factory().delete(id)
            )

        }catch(err:any){
            return response.status(400).json({
                message:err.message
            })
        }

    }
}