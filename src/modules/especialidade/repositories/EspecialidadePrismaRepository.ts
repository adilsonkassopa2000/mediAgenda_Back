import { prismaClient } from "../../../database/client.js";
import { especialidade, especialidadeSave, IEspecialidadeRepository } from "./IEspecialidadeRepository.js";




export class EspecialidadePrismaRepository implements IEspecialidadeRepository{
    async create(data: especialidade): Promise<especialidadeSave> {
        return await prismaClient.especialidade.create({
            data:data
        })
    }
    async get(): Promise<especialidadeSave[]> {
        return await prismaClient.especialidade.findMany()
    }
    async update(id: string, data: especialidade): Promise<especialidadeSave> {
        return await prismaClient.especialidade.update({
            where:{
                Id:id
            },
            data:{
                ...data
            }
        })
    }
    async delete(id: string): Promise<especialidadeSave> {
        return await prismaClient.especialidade.delete({
            where:{
                Id:id
            }
        })
    }

}