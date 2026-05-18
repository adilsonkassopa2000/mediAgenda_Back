import { prismaClient } from "../../../database/client.js";
import { IUserRepository, save } from "./IUserRepository.js";




export class UserPrismaRepository implements IUserRepository{
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