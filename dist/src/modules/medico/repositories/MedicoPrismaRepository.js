import { prismaClient } from "../../../database/client.js";
export class MedicoPrismaRepository {
    async create(data) {
        return await prismaClient.medico.create({
            data: data
        });
    }
    async get() {
        return await prismaClient.medico.findMany();
    }
    async update(id, data) {
        return await prismaClient.medico.update({
            where: {
                Id: id
            },
            data: {
                ...data
            }
        });
    }
    async delete(id) {
        return await prismaClient.medico.delete({
            where: {
                Id: id
            }
        });
    }
}
//# sourceMappingURL=MedicoPrismaRepository.js.map