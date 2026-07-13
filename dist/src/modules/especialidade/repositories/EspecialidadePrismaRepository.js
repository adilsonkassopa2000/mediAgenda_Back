import { prismaClient } from "../../../database/client.js";
export class EspecialidadePrismaRepository {
    async create(data) {
        return await prismaClient.especialidade.create({
            data: data
        });
    }
    async get() {
        return await prismaClient.especialidade.findMany();
    }
    async update(id, data) {
        return await prismaClient.especialidade.update({
            where: {
                Id: id
            },
            data: {
                ...data
            }
        });
    }
    async delete(id) {
        return await prismaClient.especialidade.delete({
            where: {
                Id: id
            }
        });
    }
}
//# sourceMappingURL=EspecialidadePrismaRepository.js.map