import { IEstadoRepository } from "./repositories/IEstadoRepository.js";





export class EstadoService{
    constructor(private iestadoRepository: IEstadoRepository){}
    async execute(estado:string){
        if(!estado)
            throw new Error('dados não passados')

        const estados = (await this.iestadoRepository.get()).
        find(item => item.estado.toLocaleLowerCase().trim() === estado.toLocaleLowerCase().trim())

        if(estados)
            throw new Error('este estado já existe')

        return await this.iestadoRepository.create(estado)
    }
    async get(){
        const estados = await this.iestadoRepository.get()

        if(!estados)
            throw new  Error('Nenhuma consulta encontrada')

        return estados
    }
}