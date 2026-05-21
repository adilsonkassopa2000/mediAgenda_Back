import { prismaClient } from "../../../database/client.js";
import { consulta, consultaSave, IConsultaRepository } from "./IConsultaRepository.js";





export class  ConsultaPrismaRepository implements IConsultaRepository{
    async upddte(id: string, data: consulta): Promise<consultaSave> {
        return await prismaClient.consulta.update({
            where:{
                Id:id
            },
            data:{
                ...data
            }
        })
    }

    async create(data: consulta): Promise<consultaSave> {
        return await prismaClient.consulta.create({
            data:data
        })
    }
    async get(): Promise<consultaSave[]> {
        return await prismaClient.consulta.findMany()
    }
    async delete(id: string): Promise<consultaSave> {
        return await prismaClient.consulta.delete({
            where:{
                Id:id
            }
        })
    }

}