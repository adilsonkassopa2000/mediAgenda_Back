import { Request, Response } from "express";
import { MedicoFactory } from "./medico.factory.js";
import { UserFactory } from "../user/user.factory.js";
import { prismaClient } from "../../database/client.js";

const medicoFactory = new MedicoFactory()
const userFactory = new UserFactory()

async function findOrCreateEspecialidade(name: string) {
    const normalized = name.trim()
    const found = await prismaClient.especialidade.findFirst({
        where: {
            especialidade: { equals: normalized }
        }
    })
    if (found) return found
    return await prismaClient.especialidade.create({
        data: {
            especialidade: normalized,
            descricao: normalized
        }
    })
}

async function findOrCreateEstado(name: string) {
    const normalized = name.trim()
    const found = await prismaClient.estado.findFirst({
        where: {
            estado: { equals: normalized }
        }
    })
    if (found) return found
    return await prismaClient.estado.create({
        data: { estado: normalized }
    })
}

async function getOrCreateUser(email: string, senha: string) {
    const normalizedEmail = email.trim().toLowerCase()
    const existing = await prismaClient.user.findFirst({
        where: { email: normalizedEmail }
    })
    if (existing) return existing
    return await userFactory.factory().execute(normalizedEmail, senha)
}

export class MedicoController{
    async create(request:Request,response:Response){
        try{
            const {
                nome,
                crm,
                escola,
                anoExperiencia,
                especialidadeId,
                especialidadeName,
                estadoId,
                estadoName,
                userId,
                email,
                senha
            } = request.body

            if(!nome || !crm || !escola || !anoExperiencia)
                throw new Error('nome, crm, escola e anos de experiência são obrigatórios')

            let finalEspecialidadeId = especialidadeId
            if (!finalEspecialidadeId) {
                if (!especialidadeName)
                    throw new Error('especialidade do médico é obrigatória')
                const especialidade = await findOrCreateEspecialidade(especialidadeName)
                finalEspecialidadeId = especialidade.Id
            }

            let finalEstadoId = estadoId
            if (!finalEstadoId) {
                if (!estadoName)
                    throw new Error('estado do médico é obrigatório')
                const estado = await findOrCreateEstado(estadoName)
                finalEstadoId = estado.Id
            }

            let finalUserId = userId
            if (!finalUserId) {
                if (!email)
                    throw new Error('email do médico é obrigatório para criar o usuário associado')
                const user = await getOrCreateUser(email, senha || 'MediAgenda123')
                finalUserId = user.Id
            }

            return response.status(200).json(
                await medicoFactory.factory().execute({
                    nome,
                    crm,
                    escola,
                    anoExperiencia,
                    especialidadeId: finalEspecialidadeId,
                    estadoId: finalEstadoId,
                    userId: finalUserId
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