import bcrypt from "bcrypt";
import { PrismaClient } from "../generated/prisma/client.js";

const prismaClient = new PrismaClient();

export async function createAdmin() {
    const admin = await prismaClient.user.findFirst({
        where: {
            email: "admin@mediagenda.com"
        }
    });

    if (!admin) {
        const senhaHash = await bcrypt.hash("admin123", 10);

        await prismaClient.user.create({
            data: {
                email: "admin@mediagenda.com",
                senha: senhaHash
            }
        });

        console.log("Administrador criado.");
    }
}

export { prismaClient };