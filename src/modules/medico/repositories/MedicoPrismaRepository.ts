import { prismaClient } from "../../../database/client.js";
import { IMedicoRepository, medico, medicoSave } from "./IMedicoRepository.js";



export class MedicoPrismaRepository implements IMedicoRepository{
    async create(data: medico): Promise<medicoSave> {
        return await prismaClient.medico.create({
            data:data
        })

    }
    async get(): Promise<medicoSave[]> {
        return  await prismaClient.medico.findMany()
    }
    async update(id: string, data: medico): Promise<medicoSave> {
        return await prismaClient.medico.update({
            where:{
                Id:id
            },
            data:{
                ...data
            }
        })

    }
    async delete(id: string): Promise<medicoSave> {
        return await prismaClient.medico.delete({
            where:{
                Id:id
            }
        })

    }

}