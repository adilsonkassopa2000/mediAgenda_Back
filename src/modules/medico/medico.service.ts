import { IMedicoRepository, medico } from "./repositories/IMedicoRepository.js";



export class MedicoService{
    constructor(private imedicoRepository: IMedicoRepository){}
    async execute(data:medico){


        if(!data) //verificar se foram passados os dados
            throw new Error("dados não passados")

        const medico = (await this.imedicoRepository.get()).
        find(item => item.nome.trim().toUpperCase() === data.nome.trim().toUpperCase())

        if(medico)// verificando se já existe um medico com o mesmo nome
            throw new Error('medico já registrado')

        return await this.imedicoRepository.create(data)
    }

    async get(){
        const medico = await this.imedicoRepository.get()

        if(!medico)
            throw new Error('nenhum médico encontrado')

        return medico
    }

    async update(id:string,data:medico){
        if(!id || !data)//verificar se os dados foram passados
            throw new Error('nenhum dados foi passado')

        const idsave = (await this.imedicoRepository.get()).find(item => item.Id.trim() === id.trim())

        if (!id)
            throw new Error('nenhum dado encontrado para este Id')

        return await this.imedicoRepository.update(id,data)
    }

    async delete(id:string){
        if(!id)//verificar se os dados foram passados
            throw new Error('nenhum dados foi passado')

        const idsave = (await this.imedicoRepository.get()).find(item => item.Id.trim() === id.trim())

        if (!id)
            throw new Error('nenhum dado encontrado para este Id')

        return await this.imedicoRepository.delete(id)
    }
}
