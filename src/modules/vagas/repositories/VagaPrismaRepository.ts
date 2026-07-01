import { prismaClient } from "../../../database/client.js";
import { IVagaRepository, vaga, vagaSave } from "./IVagaRepository.js";





export class VagaPrismaRepository implements IVagaRepository{
    async create(data: vaga): Promise<vagaSave> {
        return await prismaClient.vaga.create({
            data:{
			data: data.data,
			hora: data.hora,
			
			medico:{
				connect:{
					Id: data.medicoId
				}
			},
			estado:{
				connect:{
					Id: data.estadoId
				}
			}
		}
        })
    }
    async get(): Promise<vagaSave[]> {
        return await prismaClient.vaga.findMany()
    }
    async update(id: string, data: vaga): Promise<vagaSave> {
        return await prismaClient.vaga.update({
            where:{
                Id:id
            },
            data:{
                ...data
            }
        })
    }
    async delete(id: string): Promise<vagaSave> {
        return await prismaClient.vaga.delete({
            where:{
                Id:id
            }
        })
    }

}
