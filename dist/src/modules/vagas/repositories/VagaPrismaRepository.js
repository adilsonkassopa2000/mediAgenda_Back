import { prismaClient } from "../../../database/client.js";
export class VagaPrismaRepository {
    async create(data) {
        return await prismaClient.vaga.create({
            data: {
                data: data.data,
                hora: data.hora,
                medico: {
                    connect: {
                        Id: data.medicoId
                    }
                },
                estado: {
                    connect: {
                        Id: data.estadoId
                    }
                }
            }
        });
    }
    async get() {
        return await prismaClient.vaga.findMany();
    }
    async update(id, data) {
        return await prismaClient.vaga.update({
            where: {
                Id: id
            },
            data: {
                ...data
            }
        });
    }
    async delete(id) {
        return await prismaClient.vaga.delete({
            where: {
                Id: id
            }
        });
    }
}
//# sourceMappingURL=VagaPrismaRepository.js.map