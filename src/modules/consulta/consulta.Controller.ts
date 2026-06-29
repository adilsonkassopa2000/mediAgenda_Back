import { Request, Response } from "express"
import { ConsultaFactory } from "./consulta.Factory.js"


const consultaFactory = new ConsultaFactory()


export class ConsultaController{
     async create(request:Request,response:Response){
            try{
                const {
                    pacienteId,
                    especialidadeId,
                    medicoId,
                    vagaId,
                    estadoId
                } = request.body
		    
                return response.status(200).json(
                    await consultaFactory.factory().execute({
                        pacienteId,
                        especialidadeId,
                        medicoId,
                        vagaId,
                        estadoId
                    })
                )
    
            }catch(err:any){
                return response.status(400).json({
                    message:err.message
                })
            }
    
        }
    
        async get(request:Request,response:Response){
            try{
    
                return response.status(200).json(
                    await consultaFactory.factory().get()
                )
    
            }catch(err:any){
                return response.status(400).json({
                    message:err.message
                })
            }
    
        }
    
        async update(request:Request,response:Response){
            try{
                const {
                    id,
                    data
                } = request.body
		console.log('Id:',id)
		console.log('data:',data)    
                return response.status(200).json(
                    await consultaFactory.factory().update(id,data)
                )
    
            }catch(err:any){
                return response.status(400).json({
                    message:err.message
                })
            }
    
        }
    
        async delete(request:Request,response:Response){
            try{
                const {
                    id
                } = request.body
    
                return response.status(200).json(
                    await consultaFactory.factory().delete(id)
                )
    
            }catch(err:any){
                return response.status(400).json({
                    message:err.message
                })
            }
    
        }
}
