import { prismaClient } from "../../../database/client.js";
import { estadoSave, IEstadoRepository } from "./IEstadoRepository.js";




export class EstadoPrismaRepository implements IEstadoRepository{
    async create(estado: string): Promise<estadoSave> {
        return await prismaClient.estado.create({
            data: {
                estado
            }
        })
    }
    async get(): Promise<estadoSave[]> {
        return await prismaClient.estado.findMany()
    }

}