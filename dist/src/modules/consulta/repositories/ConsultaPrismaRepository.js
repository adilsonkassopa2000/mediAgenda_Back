import { prismaClient } from "../../../database/client.js";
export class ConsultaPrismaRepository {
    async upddte(id, data) {
        return await prismaClient.consulta.update({
            where: {
                Id: id
            },
            data: {
                ...data
            }
        });
    }
    async create(data) {
        return await prismaClient.consulta.create({
            data: data
        });
    }
    async get() {
        return await prismaClient.consulta.findMany();
    }
    async delete(id) {
        return await prismaClient.consulta.delete({
            where: {
                Id: id
            }
        });
    }
}
//# sourceMappingURL=ConsultaPrismaRepository.js.map