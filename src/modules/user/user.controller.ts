import { Request, Response } from "express";
import { UserFactory } from "./user.factory.js";
import { log } from "node:console";

const userFactory = new UserFactory();


export class  UserController{
    async create(request:Request,response:Response){
        try{
            const {email,senha} = request.body
            console.log("email:",email)
	    console.log("senha",senha)
            return  response.status(200).json(await userFactory.factory().execute(email,senha))

        }catch(err:any){
            response.status(400).json({
                message:err.message
            })
        }
    }

    async get(request:Request,response:Response){
        try{
            
            return response.status(200).json(await userFactory.factory().get())

        }catch(err:any){
            response.status(400).json({
                message:err.message
            })
        }
    }

    async login(request:Request,response:Response){
        try{
            const {email,senha} = request.body
            

            return response.status(200).json(await userFactory.factory().login(email,senha))

        }catch(err:any){
            response.status(400).json({
                message:err.message
            })
        }
    }

    async update(request:Request,response:Response){
        try{
            const {id,data} = request.body
            

            return response.status(200).json(await userFactory.factory().updatea(id,data))

        }catch(err:any){
            response.status(400).json({
                message:err.message
            })
        }
    }
}
