import { prismaClient } from "../../../database/client.js";
import { IPacienteRepository, paciente, pacienteSave } from "./IPacienteRepository.js";




export class PacientePrismaRepository implements IPacienteRepository{
    async create(data: paciente): Promise<pacienteSave> {
        return await prismaClient.paciente.create({
            data:data
        })
    }
    async get(): Promise<pacienteSave[]> {
        return await prismaClient.paciente.findMany()
    }
    async update(id: string, data: paciente): Promise<pacienteSave> {
        return await prismaClient.paciente.update({
            where:{
                Id:id
            },
            data:{
                ...data
            }
        })
    }
    async delete(id: string): Promise<pacienteSave> {
        return await prismaClient.paciente.delete({
            where:{
                Id:id
            }
        })
    }

}