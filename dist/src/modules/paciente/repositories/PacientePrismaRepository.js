import { prismaClient } from "../../../database/client.js";
export class PacientePrismaRepository {
    async create(data) {
        return await prismaClient.paciente.create({
            data: data
        });
    }
    async get() {
        return await prismaClient.paciente.findMany();
    }
    async update(id, data) {
        return await prismaClient.paciente.update({
            where: {
                Id: id
            },
            data: {
                ...data
            }
        });
    }
    async delete(id) {
        return await prismaClient.paciente.delete({
            where: {
                Id: id
            }
        });
    }
}
//# sourceMappingURL=PacientePrismaRepository.js.map