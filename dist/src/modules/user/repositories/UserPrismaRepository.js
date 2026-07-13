import { prismaClient } from "../../../database/client.js";
export class UserPrismaRepository {
    async update(id, data) {
        return await prismaClient.user.update({
            where: {
                Id: id
            },
            data: {
                ...data
            }
        });
    }
    async creata(email, senha) {
        return await prismaClient.user.create({
            data: {
                email,
                senha
            }
        });
    }
    async get() {
        return await prismaClient.user.findMany();
    }
}
//# sourceMappingURL=UserPrismaRepository.js.map