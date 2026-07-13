import { prismaClient } from "../../../database/client.js";
export class EstadoPrismaRepository {
    async create(estado) {
        return await prismaClient.estado.create({
            data: {
                estado
            }
        });
    }
    async get() {
        return await prismaClient.estado.findMany();
    }
}
//# sourceMappingURL=EstadoPrismaRepository.js.map