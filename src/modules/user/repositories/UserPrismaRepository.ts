import { prismaClient } from "../../../database/client.js";
import { CData, IUserRepository, save } from "./IUserRepository.js";




export class UserPrismaRepository implements IUserRepository{
    async update(id: string, data: CData): Promise<save> {
       return await prismaClient.user.update({
        where:{
            Id:id
        },
        data:{
            ...data
        }
       })
    }
    async creata(email:string,senha:string):Promise<save>{
        return await prismaClient.user.create({
            data:{
                email,
                senha
            }
        })
        
    }
    async get():Promise<save[]>{
        return await prismaClient.user.findMany()
    }
}